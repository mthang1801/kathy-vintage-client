import React, { useState, useEffect } from 'react';
import { GlobalStyles } from '../styles/GlobalStyles.jsx';
import { useTheme } from '../theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from '../redux/user/user.actions';
import { connect } from 'react-redux';
const App = ({ children, user, checkUserSession }) => {
  const { theme } = useTheme();
  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <>
      <GlobalStyles theme={theme} />
      <CssBaseline />
      {children}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(App);
