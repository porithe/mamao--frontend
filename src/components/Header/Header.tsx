import React, { useContext } from 'react';
import { StyledHeader, StyledLink, LogoutButton, StyledSettingsLink } from './Header.styles';
import { AuthContext } from '../../context/authContext';
import ROUTES from '../../constants/routes';

const Header = () => {
  const authContext = useContext(AuthContext);
  return (
    <StyledHeader>
      <StyledLink to="/">Mamao</StyledLink>
      <StyledSettingsLink to={ROUTES.PROFILE_SETTINGS}>Settings</StyledSettingsLink>
      <LogoutButton type="button" onClick={authContext.logout}>
        Logout
      </LogoutButton>
    </StyledHeader>
  );
};

export default Header;
