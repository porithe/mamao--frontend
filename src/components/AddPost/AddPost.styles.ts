import styled from 'styled-components';
import COLORS from '../../constants/colors';

type TextAreaProps = {
  isError: boolean;
};

export const StyledForm = styled.form`
  margin: 1.5rem auto 0 auto;
  width: 275px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 320px;
  }
  @media (min-width: 1025px) {
    width: 360px;
  }
`;

export const StyledTextArea = styled.textarea<TextAreaProps>`
  resize: none;
  width: 100%;
  height: 100px;
  background-color: ${COLORS.GRAY};
  color: ${COLORS.DARK_BLUE};
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 20px;
  border: 2px solid ${({ isError }) => (isError ? COLORS.RED : COLORS.GRAY)};
  outline: none;
  padding: 0.625rem 1rem;
  font-family: 'Ubuntu', sans-serif;
  &::placeholder {
    opacity: 0.65;
    color: ${COLORS.DARK_BLUE};
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.95rem;
  }
  @media (min-width: 1025px) {
    font-size: 1.05rem;
  }
`;

export const StyledButton = styled.button`
  background-color: ${COLORS.PURPLE};
  color: ${COLORS.WHITE};
  font-size: 0.9rem;
  font-weight: 800;
  border: none;
  border-radius: 50px;
  padding: 0.4rem 1rem;
  margin-left: auto;
  margin-top: 1rem;
  transition: 0.1s ease-in-out;
  outline: none;
  cursor: pointer;
  &:active {
    transform: scale(0.93);
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (min-width: 1025px) {
    font-size: 1.1rem;
    padding: 0.5rem 1.3rem;
  }
`;
