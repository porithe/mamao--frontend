import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthWrapper, StyledHome, StyledText, StyledWrapper } from './Home.styles';
import useAuthView from '../../utils/auth/useAuthView';

const Home = () => {
  const { currentView, renderAuthView } = useAuthView();
  return (
    <StyledHome>
      <ToastContainer />
      <AuthWrapper>{renderAuthView(currentView)}</AuthWrapper>
      <StyledWrapper>
        <StyledText>See what’s happen’ in the world right now!</StyledText>
      </StyledWrapper>
    </StyledHome>
  );
};

export default Home;
