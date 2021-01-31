import styled from 'styled-components';
import { Link } from 'react-router-dom';
import COLORS from '../../constants/colors';

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 1.8rem;
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
