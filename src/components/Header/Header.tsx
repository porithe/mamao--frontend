import React from 'react';
import { StyledHeader, StyledLink } from './Header.styles';
import { UNAUTHENTICATED_ROUTES } from '../../router/routes';

const Header = () => (
  <StyledHeader>
    <StyledLink to={UNAUTHENTICATED_ROUTES.HOME}>Mamao</StyledLink>
  </StyledHeader>
);

export default Header;
