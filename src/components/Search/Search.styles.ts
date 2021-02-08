import styled from 'styled-components';
import { Link } from 'react-router-dom';
import COLORS from '../../constants/colors';

type InputProps = {
  isUserListOpen: boolean;
};

export const Wrapper = styled.div`
  margin: 1rem auto 0 auto;
  width: 275px;
  height: 40px;
  position: relative;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 320px;
    height: 45px;
  }
  @media (min-width: 1025px) {
    width: 360px;
    height: 50px;
  }
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.GRAY};
  color: ${COLORS.DARK_BLUE};
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: ${({ isUserListOpen }) => (isUserListOpen ? '30px 30px 0 0' : '50px')};
  outline: none;
  &::placeholder {
    color: ${COLORS.DARK_BLUE};
    opacity: 0.65;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (min-width: 1025px) {
    font-size: 1.1rem;
  }
`;

export const UserList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style-type: none;
  z-index: 5;
`;

export const UserItem = styled.li`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${COLORS.WHITE};
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 45px;
  }
  @media (min-width: 1025px) {
    height: 50px;
  }
`;

export const UserLink = styled(Link)`
  color: ${COLORS.WHITE};
  background-color: ${COLORS.PURPLE};
  font-size: 0.85rem;
  font-weight: 600;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  &:active,
  &:hover {
    opacity: 0.8;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.95rem;
  }
  @media (min-width: 1025px) {
    font-size: 1.05rem;
  }
`;
