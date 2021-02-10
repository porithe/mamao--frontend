import styled from 'styled-components';
import { Link } from 'react-router-dom';
import COLORS from '../../constants/colors';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.8rem;
  background-color: ${COLORS.WHITE};
  z-index: 10;
  @media (min-width: 768px) {
    height: 100px;
    padding: 0 2.5rem;
  }
`;

export const StyledLink = styled(Link)`
  color: ${COLORS.PURPLE};
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const LogoutButton = styled.button`
  border: 2px solid ${COLORS.PURPLE};
  border-radius: 8px;
  padding: 0.3125rem 0.625rem;
  background-color: transparent;
  color: ${COLORS.PURPLE};
  font-weight: 700;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 0.4rem 1.2rem;
  }
`;
