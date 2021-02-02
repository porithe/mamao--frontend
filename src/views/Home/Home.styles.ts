import styled from 'styled-components';
import COLORS from '../../constants/colors';

type AuthInputProps = {
  $isError: boolean;
};

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

export const AuthInput = styled.input<AuthInputProps>`
  width: 250px;
  height: 40px;
  background-color: transparent;
  border: 2px solid ${({ $isError }) => ($isError ? COLORS.RED : COLORS.PURPLE)};
  color: ${({ $isError }) => ($isError ? COLORS.RED : COLORS.PURPLE)};
  border-radius: 40px;
  margin-bottom: 1rem;
  outline: none;
  padding: 0 1rem;
  font-size: 1rem;
  font-weight: 500;
  transition: 0.2s ease-in-out;
  :focus {
    box-shadow: 0 0 10px 0 ${COLORS.PURPLE_45};
  }
  ::placeholder {
    color: ${COLORS.PURPLE_45};
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    width: 300px;
    height: 45px;
    font-size: 1.2rem;
    padding: 0 1.3rem;
  }
  @media (min-width: 1281px) {
    width: 320px;
    height: 50px;
    font-size: 1.3rem;
    padding: 0 1.5rem;
  }
`;

export const RedirectMessage = styled.p`
  color: ${COLORS.PURPLE};
  font-size: 0.9rem;
  margin-top: 0.625rem;
  font-weight: 500;
  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 1rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.1rem;
  }
`;

export const RedirectButton = styled.button`
  color: ${COLORS.PURPLE};
  font-size: 0.9rem;
  margin-left: 0.425rem;
  font-weight: 700;
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 1rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.1rem;
  }
`;
