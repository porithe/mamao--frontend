import React from 'react';
import { useForm } from 'react-hook-form';
import { AuthInput } from '../../assets/styles/global.styles';
import AuthButton from '../AuthButton/AuthButton';

type Inputs = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (values: Inputs) => console.log(values);
  return (
    <>
      <AuthInput
        name="username"
        placeholder="Username"
        type="text"
        ref={register({ required: true, minLength: 4, maxLength: 24 })}
        $isError={!!errors.username}
        data-testid="username-inp"
      />
      <AuthInput
        name="password"
        placeholder="Password"
        type="password"
        ref={register({ required: true, minLength: 8, maxLength: 32 })}
        $isError={!!errors.password}
        data-testid="password-inp"
      />
      <AuthButton name="Log in" isMain callback={handleSubmit(onSubmit)} marginTop="2rem" />
    </>
  );
};

export default Login;
