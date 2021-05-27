import React, { useState, useEffect } from "react"
import {
  Wrapper,
  DashBoardContainer,
  MainContent,
} from "../styles/user.index.styles"
import useLanguage from "../components/Global/useLanguage"
import DashBoard from "../components/User/Dashboard"
import GeneralInformation from "../components/User/GeneralInformation"
import { connect } from "react-redux"
import {
  selectCurrentUser,
  selectUserFetched,
  selectUserLoading,
} from "../redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import { navigate } from "gatsby"
import { useTheme } from "../theme"
const UserPage = ({ user, loading, fetched }) => {
  const { i18n, lang } = useLanguage()
  const { theme } = useTheme()
  const {
    dashboard: { options },information
  } = i18n.store.data[lang].translation.user
  const [selectedOption, setSelectedOption] = useState(options[0].key)
  
  useEffect(() => {
    if (!loading && fetched && !user) {
      navigate("/", { replace: true })
    }
  }, [user, loading, fetched])
  return (
    <Wrapper>
      <DashBoardContainer>
        <DashBoard
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </DashBoardContainer>
      <MainContent theme={theme}>
        {selectedOption === options[0].key && user && (
          <GeneralInformation
            title={options[0].name}
            user={user}
            information={information}
          />
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
