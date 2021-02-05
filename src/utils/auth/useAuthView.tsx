import React, { useState } from 'react';
import { StyledTitle } from '../../views/Home/Home.styles';
import AuthButton from '../../components/AuthButton/AuthButton';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import VIEWS from '../../constants/authview';

const useAuthView = () => {
  const [currentView, setCurrentView] = useState<VIEWS>(VIEWS.DEFAULT);
  const renderAuthView = (view: VIEWS) => {
    switch (view) {
      default:
        return (
          <>
            <StyledTitle>Join mamao today!</StyledTitle>
            <AuthButton name="Sing up" isMain callback={() => setCurrentView(VIEWS.REGISTER)} />
            <AuthButton name="Log in" isMain={false} callback={() => setCurrentView(VIEWS.LOGIN)} />
          </>
        );
      case VIEWS.LOGIN:
        return <Login setView={() => setCurrentView(VIEWS.REGISTER)} />;
      case VIEWS.REGISTER:
        return <Register setView={setCurrentView} />;
    }
  };
  return {
    renderAuthView,
    currentView,
  };
};

export default useAuthView;
