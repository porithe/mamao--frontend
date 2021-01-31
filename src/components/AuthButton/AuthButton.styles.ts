import styled from 'styled-components';
import COLORS from '../../constants/colors';

type StyledAuthButtonProps = {
  $isMain: boolean;
  marginTop?: string;
};

// eslint-disable-next-line import/prefer-default-export
export const StyledAuthButton = styled.button<StyledAuthButtonProps>`
  background-color: ${({ $isMain }) => ($isMain ? COLORS.PURPLE : COLORS.WHITE)};
  color: ${({ $isMain }) => ($isMain ? COLORS.WHITE : COLORS.PURPLE)};
  border: 2px solid ${COLORS.PURPLE};
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 30px;
  box-shadow: ${({ $isMain }) => ($isMain ? `0 0 10px 0 ${COLORS.PURPLE_45}` : '')};
  margin-top: ${({ marginTop }) => marginTop};
  outline: none;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  :focus {
    transform: scale(0.97);
  }
  @media (min-width: 768px) {
    width: 320px;
    height: 50px;
    font-size: 1.3rem;
  }
`;
