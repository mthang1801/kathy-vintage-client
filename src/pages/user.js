import React, { useState, useEffect } from "react"
import {
  Wrapper,
  DashBoardContainer,
  MainContent,
  Header,
  Title,
  MobileToolbar,
  AvatarContainer,
  ButtonHomePage,
} from "../styles/user.index.styles"
import useLanguage from "../components/Global/useLanguage"
import Divider from "@material-ui/core/Divider"
import DashBoard from "../components/User/Dashboard"
import GeneralInformation from "../components/User/GeneralInformation"
import ChangePassword from "../components/User/ChangePassword"
import OrdersList from "../components/User/OrdersList"
import { connect } from "react-redux"
import Skeleton from "@material-ui/lab/Skeleton"
import {
  selectCurrentUser,
  selectUserFetched,
  selectUserLoading,
} from "../redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import { navigate } from "gatsby"
import { useTheme } from "../theme"
import GeneralInformationSkeleton from "../components/UI/Lab/Skeleton/GeneralInformation"
import UserDashboardSkeleton from "../components/UI/Lab/Skeleton/UserDashboard"
import UserDashBoardDialog from "../components/User/UserDashBoardDialog"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { AiOutlineHome } from "react-icons/ai"
import {trackCustomEvent} from "gatsby-plugin-google-analytics"

const UserPage = ({ user, loading, isFetched }) => {
  const { i18n, lang } = useLanguage()
  const { theme } = useTheme()
  const {
    dashboard: { options },
    information,
    password,
  } = i18n.store.data[lang].translation.user
  const [selectedOption, setSelectedOption] = useState(options[0].key)
  const [openDashboardDialog, setOpenDashboardDialog] = useState(false)
  let title
  switch (selectedOption) {
    case options[1].key:
      title = options[1].name
      break
    case options[2].key:
      title = options[2].name
      break
    default:
      title = options[0].name
  }

  useEffect(() => {
    if (!loading && isFetched && !user) {
      navigate("/", { replace: true })
    }
  }, [user, loading, isFetched])
  return (
    <Wrapper>
      <UserDashBoardDialog
        open={openDashboardDialog}
        setOpen={setOpenDashboardDialog}
      >
        {user && (
          <DashBoard
            user={user}
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setOpenDashboardDialog={setOpenDashboardDialog}
            isDialog
          />
        )}
      </UserDashBoardDialog>
      <MobileToolbar>
        {user && (
          <Header justify="space-between">
            <ButtonHomePage theme={theme} rounded onClick={() => {
              trackCustomEvent({
                action : "Click",
                category : "navigate" ,
                label : "Go Home page"
              })
              navigate("/")}}>
              <AiOutlineHome />
            </ButtonHomePage>
            <AvatarContainer
              title={user.email}
              onClick={() => setOpenDashboardDialog(true)}
            >
              <LazyLoadImage
                src={user.photoURL}
                alt={user.photoURL}
                effect="blur"
              />
            </AvatarContainer>
          </Header>
        )}
      </MobileToolbar>
      <DashBoardContainer>
        {loading ? (
          <UserDashboardSkeleton />
        ) : (
          user && (
            <DashBoard
              user={user}
              options={options}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          )
        )}
      </DashBoardContainer>
      <MainContent theme={theme}>
        <Header>
          {loading ? (
            <Skeleton variant="text" animation="wave" width={200} height={60} />
          ) : (
            <Title>{title}</Title>
          )}
        </Header>
        <Divider />
        {loading ? (
          <GeneralInformationSkeleton />
        ) : (
          <>
            {selectedOption === options[0].key && user && (
              <GeneralInformation
                title={options[0].name}
                user={user}
                information={information}
              />
            )}
            {selectedOption === options[1].key && (
              <ChangePassword
                lang={lang}
                title={options[1].name}
                user={user}
                passwordTranslation={password}
              />
            )}
            {selectedOption === options[2].key && (
              <OrdersList title={options[2].name} />
            )}
          </>
        )}
      </MainContent>
    </Wrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  loading: selectUserLoading,
  isFetched: selectUserFetched,
})
export default connect(mapStateToProps)(UserPage)
