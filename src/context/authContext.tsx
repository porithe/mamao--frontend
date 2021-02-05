import React, { ReactNode, useEffect } from 'react';
import { toast } from 'react-toastify';
import { LoginData } from '../constants/login';
import authApi, { RegisterData } from '../api/auth';
import { AuthStatuses, LocalStorage } from '../constants/authContextTypes';
import { isAuthenticated } from '../utils/auth/auth';
import { TOAST_MESSAGES, toastifyOptions } from '../constants/toastify';

type AuthProviderProps = {
  children: ReactNode;
};

type State = {
  state: {
    status: string;
  };
  login: ({ username, password }: LoginData) => Promise<void>;
  logout: () => void;
  singUp: ({ username, email, password }: RegisterData) => Promise<void>;
};

const AuthContext = React.createContext<State>({} as State);

function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = React.useState({ status: AuthStatuses.SUCCESS });
  useEffect(() => {
    const isUserSignedIn = isAuthenticated();
    if (isUserSignedIn) {
      setState({
        status: AuthStatuses.SUCCESS,
      });
    } else {
      setState({
        status: AuthStatuses.UNAUTHORIZED,
      });
    }
  }, []);
  const singUp = async (userData: RegisterData) => {
    try {
      await authApi.register(userData);
      toast.success(TOAST_MESSAGES.CREATEAD_ACCOUNT, toastifyOptions);
    } catch (err) {
      toast.error(TOAST_MESSAGES.GLOBAL_ERROR, toastifyOptions);
    }
  };
  const login = async ({ username, password }: LoginData) => {
    try {
      const { data } = await authApi.login({ username, password });
      localStorage.setItem(LocalStorage.TOKEN, data.accessToken);
      setState({
        status: AuthStatuses.SUCCESS,
      });
    } catch (err) {
      if (err?.response?.status === 401) {
        setState({ status: AuthStatuses.UNAUTHORIZED });
        toast.error(TOAST_MESSAGES.UNAUTHORIZED, toastifyOptions);
      } else if (err?.response?.status === 404) {
        setState({ status: AuthStatuses.ERROR });
        toast.error(TOAST_MESSAGES.USER_NOT_FOUND, toastifyOptions);
      } else {
        setState({ status: AuthStatuses.ERROR });
        toast.error(TOAST_MESSAGES.GLOBAL_ERROR, toastifyOptions);
      }
    }
  };
  const logout = (): void => {
    setState({
      status: AuthStatuses.PENDING,
    });
    localStorage.removeItem(LocalStorage.TOKEN);
  };
  return (
    <AuthContext.Provider value={{ state, login, logout, singUp }}>{children}</AuthContext.Provider>
  );
}

function useAuthState() {
  const { state } = React.useContext(AuthContext);
  const isPending = state.status === AuthStatuses.PENDING;
  const isSuccess = state.status === AuthStatuses.SUCCESS;
  const isError = state.status === AuthStatuses.ERROR;
  const isUnauthorizedError = state.status === AuthStatuses.UNAUTHORIZED;
  const isUserAuthenticated = isSuccess;
  return {
    isPending,
    isSuccess,
    isError,
    isUserAuthenticated,
    isUnauthorizedError,
  };
}

export { AuthProvider, useAuthState, AuthContext };
