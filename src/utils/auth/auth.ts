import jwtDecode from 'jwt-decode';
import { LocalStorage } from '../../constants/authContextTypes';

export const getToken = () => localStorage.getItem(LocalStorage.TOKEN) || null;

export const isTokenValid = (token: string) => {
  const { exp }: any = jwtDecode(token);
  return Date.now() <= exp * 1000;
};

export const isAuthenticated = () => {
  const token = getToken();
  return token ? Boolean(token) && isTokenValid(token) : false;
};

export const bearerToken = () => `Bearer ${getToken()}`;
