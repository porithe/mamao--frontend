import jwtDecode from 'jwt-decode';
import { LocalStorage } from '../../constants/authContextTypes';

export const isTokenValid = (token: string) => {
  const { exp }: any = jwtDecode(token);
  return Date.now() <= exp * 1000;
};

export const isAuthenticated = () => {
  const token = localStorage.getItem(LocalStorage.TOKEN);
  return token ? Boolean(token) && isTokenValid(token) : false;
};
