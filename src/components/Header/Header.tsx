import React, { useContext } from 'react';
import { StyledHeader, StyledLink, LogoutButton } from './Header.styles';
import { AuthContext } from '../../context/authContext';

const Header = () => {
  const authContext = useContext(AuthContext);
  return (
    <StyledHeader>
      <StyledLink to="/">Mamao</StyledLink>
      <LogoutButton type="button" onClick={authContext.logout}>
        Logout
      </LogoutButton>
    </StyledHeader>
  );
};

export default Header;
