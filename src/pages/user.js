import React, { useState, useEffect } from "react"
import {
  Wrapper,
  DashBoardContainer,
  MainContent,
} from "../styles/user.index.styles"
import useLanguage from "../components/Global/useLanguage"
import DashBoard from "../components/User/Dashboard"
import GeneralInformation from "../components/User/GeneralInformation"
import ChangePassword from "../components/User/ChangePassword"
import { connect } from "react-redux"
import {
  selectCurrentUser,
  selectUserFetched,
  selectUserLoading,
} from "../redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import { navigate } from "gatsby"
import { useTheme } from "../theme"
const UserPage = ({ user, loading, isFetched }) => {
  const { i18n, lang } = useLanguage()
  const { theme } = useTheme()
  const {
    dashboard: { options },
    information,
    password,
  } = i18n.store.data[lang].translation.user
  const [selectedOption, setSelectedOption] = useState(options[0].key)

  useEffect(() => {
    if (!loading && isFetched && !user) {
      navigate("/", { replace: true })
    }
  }, [user, loading, isFetched])
  return (
    <Wrapper>
      {user && (
        <>
          <DashBoardContainer>
            <DashBoard
              user={user}
              options={options}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </DashBoardContainer>
          <MainContent theme={theme}>
            {selectedOption === options[0].key && (
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
          </MainContent>
        </>
      )}
    </Wrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  loading: selectUserLoading,
  isFetched: selectUserFetched,
})
export default connect(mapStateToProps)(UserPage)
