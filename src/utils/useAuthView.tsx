import React, { useState } from 'react';
import { StyledTitle } from '../views/Home/Home.styles';
import AuthButton from '../components/AuthButton/AuthButton';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

export enum VIEWS {
  HOME = 'HOME',
  REGISTER = 'REGISTER',
  LOGIN = 'LOGIN',
}

const useAuthView = () => {
  const [currentView, setCurrentView] = useState<VIEWS>(VIEWS.HOME);
  const renderAuthView = (view: VIEWS) => {
    switch (view) {
      case VIEWS.HOME:
        return (
          <>
            <StyledTitle>Join mamao today!</StyledTitle>
            <AuthButton name="Sing up" isMain callback={() => setCurrentView(VIEWS.REGISTER)} />
            <AuthButton name="Log in" isMain={false} callback={() => setCurrentView(VIEWS.LOGIN)} />
          </>
        );
      case VIEWS.LOGIN:
        return <Login />;
      case VIEWS.REGISTER:
        return <Register />;
      default:
        return null;
    }
  };
  return {
    renderAuthView,
    currentView,
  };
};

export default useAuthView;
