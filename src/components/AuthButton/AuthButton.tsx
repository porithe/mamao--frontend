import React from 'react';
import { StyledAuthButton } from './AuthButton.styles';

type AuthButtonProps = {
  name: string;
  isMain: boolean;
  callback: () => void;
  marginTop?: string;
};

const AuthButton = ({ name, isMain, callback, marginTop }: AuthButtonProps) => (
  <StyledAuthButton $isMain={isMain} onClick={callback} marginTop={marginTop}>
    {name}
  </StyledAuthButton>
);

AuthButton.defaultProps = {
  marginTop: '',
};

export default AuthButton;
