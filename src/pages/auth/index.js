import React, { useEffect } from 'react';
import Layout from '../../containers/Layout';
import SignInForm from '../../components/Auth/SignInForm';
import { connect } from 'react-redux';
import {
  selectCurrentUser,
  selectUserFetched,
} from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
const Login = ({ user, isFetched, ...props }) => {
  const location = useLocation();
  useEffect(() => {
    if (user) {
      navigate(location?.state?.from || '/');
    }
  }, [user]);
  return <Layout>{!user && isFetched && <SignInForm />}</Layout>;
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  isFetched: selectUserFetched,
});

export default connect(mapStateToProps)(Login);
