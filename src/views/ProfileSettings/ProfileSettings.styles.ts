import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const StyledForm = styled.form`
  width: 280px;
  margin: 2rem auto 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.DARK_BLUE};
  margin-bottom: 0.3125rem;
  margin-top: 1rem;
  display: block;
  @media (min-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 0.65rem;
    font-size: 1.3rem;
  }
`;

export const StyledInput = styled.input`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${COLORS.DARK_BLUE};
  background-color: ${COLORS.WHITE};
  padding: 0.625rem 1rem;
  border: 1px solid ${COLORS.DARK_BLUE};
  border-radius: 5px;
  width: 100%;
  height: 35px;
  outline: none;
  @media (min-width: 768px) {
    height: 50px;
    font-size: 1.05rem;
  }
`;

export const StyledTextarea = styled.textarea`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${COLORS.DARK_BLUE};
  background-color: ${COLORS.WHITE};
  padding: 0.625rem 1rem;
  border: 1px solid ${COLORS.DARK_BLUE};
  border-radius: 5px;
  resize: none;
  width: 100%;
  min-height: 80px;
  outline: none;
  @media (min-width: 768px) {
    min-height: 120px;
    font-size: 1.05rem;
  }
`;

export const StyledButton = styled.button`
  font-size: 1rem;
  font-weight: 700;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.PURPLE};
  cursor: pointer;
  outline: none;
  padding: 0.625rem 1.5rem;
  margin-left: auto;
  margin-top: 1.2rem;
  border: none;
  border-radius: 30px;
  @media (min-width: 768px) {
    padding: 0.8rem 2.2rem;
    font-size: 1.15rem;
    margin-top: 2rem;
  }
`;
