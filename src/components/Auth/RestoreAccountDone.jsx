import React from "react";
import {
  ForgotDoneContainer,
  CheckIconContainer,
  TextContent,
  ButtonDone,
} from "./styles/RestoreAccountDone.styles";
import useLanguage from "../Global/useLanguage"
import { withRouter } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import {useTheme} from "../../theme"
const ForgotPasswordDone = ({ history, location, match }) => {
  const {theme} = useTheme();
  const {i18n, lang} = useLanguage();
  const {restoreAccountDone} = i18n.store.data[lang].translation.auth;
  return (
    <ForgotDoneContainer theme={theme}>
      <CheckIconContainer>
        <FaRegCheckCircle />
      </CheckIconContainer>
      <TextContent>
        {restoreAccountDone}
      </TextContent>
      <ButtonDone onClick={() => history.replace("/auth")}>
        Done
      </ButtonDone>
    </ForgotDoneContainer>
  );
};

export default withRouter(ForgotPasswordDone);
