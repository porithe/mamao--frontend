import React, { useContext } from 'react';
import { StyledHeader, StyledLink, LogoutButton } from './Header.styles';
import { AuthContext, useAuthState } from '../../context/authContext';

const Header = () => {
  const { isUserAuthenticated } = useAuthState();
  const authContext = useContext(AuthContext);
  return (
    <StyledHeader>
      <StyledLink to="/">Mamao</StyledLink>
      {isUserAuthenticated && (
        <LogoutButton type="button" onClick={authContext.logout}>
          Logout
        </LogoutButton>
      )}
    </StyledHeader>
  );
};

export default Header;
