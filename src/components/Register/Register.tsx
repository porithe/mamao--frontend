import React from 'react';
import { useForm } from 'react-hook-form';
import { AuthInput } from '../../assets/styles/global.styles';
import AuthButton from '../AuthButton/AuthButton';
import { emailPattern } from '../../constants/patterns';

type Inputs = {
  username: string;
  email: string;
  password: string;
  repeatedPassword: string;
};

const Register = () => {
  const { register, handleSubmit, errors, watch } = useForm<Inputs>();
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
        name="email"
        placeholder="E-mail"
        type="text"
        ref={register({ required: true, pattern: emailPattern })}
        $isError={!!errors.email}
        data-testid="email-inp"
      />
      <AuthInput
        name="password"
        placeholder="Password"
        type="password"
        ref={register({ required: true, minLength: 8, maxLength: 32 })}
        $isError={!!errors.password}
        data-testid="password-inp"
      />
      <AuthInput
        name="repeatedPassword"
        placeholder="Repeat password"
        type="password"
        ref={register({ required: true, validate: (val) => val === watch('password') })}
        $isError={!!errors.repeatedPassword}
        data-testid="repeatedPassword-inp"
      />
      <AuthButton name="Sing up" isMain callback={handleSubmit(onSubmit)} marginTop="2rem" />
    </>
  );
};

export default Register;
