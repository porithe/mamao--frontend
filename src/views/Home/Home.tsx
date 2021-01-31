import React from 'react';
import { AuthWrapper, StyledHome, StyledText, StyledWrapper } from './Home.styles';
import useAuthView from '../../utils/useAuthView';

const Home = () => {
  const { currentView, renderAuthView } = useAuthView();
  return (
    <StyledHome>
      <AuthWrapper>{renderAuthView(currentView)}</AuthWrapper>
      <StyledWrapper>
        <StyledText>See what’s happen’ in the world right now!</StyledText>
      </StyledWrapper>
    </StyledHome>
  );
};

export default Home;
