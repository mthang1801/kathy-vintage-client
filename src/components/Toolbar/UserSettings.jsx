import React, { useState, useRef, useEffect } from 'react';
import {
  Wrapper,
  AvatarContainer,
  UserOverview,
  Dropdown,
} from './styles/UserSettings.styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import UserSettingsDropdown from '../Dropdown/UserSettingsDropdown';
import { useTheme } from '../../theme';

const UserSetting = ({ user }) => {
  const [show, setShow] = useState(false);
  const { theme } = useTheme();
  const userSettingRef = useRef(null);
  useEffect(() => {
    function trackUserClickSettingUser(e) {
      if (!userSettingRef?.current?.contains(e.target) && show) {
        setShow(false);
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('click', trackUserClickSettingUser);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('click', trackUserClickSettingUser);
      }
    };
  });
  return (
    <Wrapper
      ref={userSettingRef}
      onClick={() => setShow((prevState) => !prevState)}
    >
      <UserOverview>
        <AvatarContainer>
          <LazyLoadImage
            effect="blur"
            src={user?.photoURL}
            alt={user?.photoURL}
            title={user.displayName}
          />
        </AvatarContainer>
      </UserOverview>
      <Dropdown show={show} theme={theme}>
        <UserSettingsDropdown user={user} />
      </Dropdown>
    </Wrapper>
  );
};

export default UserSetting;
