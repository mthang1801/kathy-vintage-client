import React from 'react';
import {
  ForgotDoneContainer,
  CheckIconContainer,
  TextContent,
  ButtonDone,
} from './styles/RestoreAccountDone.styles';
import { useLanguage } from '../../locales';
import { withRouter } from 'react-router-dom';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useTheme } from '../../theme';
const ForgotPasswordDone = ({ history }) => {
  const { theme } = useTheme();
  const {
    translation: {
      auth: { restoreAccountDone },
    },
  } = useLanguage();

  const onClickButton = () => {
    history.replace('/auth');
  };
  return (
    <ForgotDoneContainer theme={theme}>
      <CheckIconContainer>
        <FaRegCheckCircle />
      </CheckIconContainer>
      <TextContent>{restoreAccountDone}</TextContent>
      <ButtonDone onClick={onClickButton}>Done</ButtonDone>
    </ForgotDoneContainer>
  );
};

export default withRouter(ForgotPasswordDone);
