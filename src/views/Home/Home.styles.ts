import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const StyledHome = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: stretch;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${COLORS.PURPLE};
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 3rem;
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.8rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 2.3rem;
  }
  @media (min-width: 1281px) and (max-width: 1599px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1600px) {
    font-size: 2.7rem;
  }
`;

export const AuthWrapper = styled.div`
  flex-grow: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  @media (min-width: 768px) {
    flex-grow: inherit;
    width: 55%;
  }
`;

export const StyledWrapper = styled.div`
  width: 45%;
  background-color: ${COLORS.PURPLE};
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  @media (min-width: 768px) {
    display: flex;
    padding: 0 2.5rem;
  }
  @media (min-width: 1600px) {
    padding: 0 3.5rem;
  }
`;

export const StyledText = styled.p`
  font-size: 1.3rem;
  color: ${COLORS.WHITE};
  font-weight: 500;
  text-align: center;
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.6rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.9rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1281px) and (max-width: 1599px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1600px) {
    font-size: 3rem;
  }
`;
