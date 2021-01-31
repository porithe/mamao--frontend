import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const StyledHome = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${COLORS.PURPLE};
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 5rem;
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.8rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.7rem;
  }
  @media (min-width: 768px) {
    margin-bottom: 6.25rem;
  }
  @media (min-width: 1025px) {
    font-size: 3.5rem;
  }
`;
