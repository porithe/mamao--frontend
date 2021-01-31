import styled from 'styled-components';
import COLORS from '../../constants/colors';

type AuthInputProps = {
  $isError: boolean;
};

// eslint-disable-next-line import/prefer-default-export
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
  @media (min-width: 768px) {
    width: 320px;
    height: 50px;
    font-size: 1.3rem;
    padding: 0 1.5rem;
  }
`;
