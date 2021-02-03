import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import {
  AuthInput,
  RedirectButton,
  RedirectMessage,
  StyledTitle,
} from '../../views/Home/Home.styles';
import AuthButton from '../AuthButton/AuthButton';
import { emailPattern } from '../../constants/patterns';
import authApi, { RegisterData } from '../../api/auth';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/toastify.css';
import { TOAST_MESSAGES, toastifyOptions } from '../../constants/toastify';
import VIEWS from '../../constants/authview';

type Inputs = {
  username: string;
  email: string;
  password: string;
  repeatedPassword: string;
};

type RegisterProps = {
  setView: any;
};

const Register = ({ setView }: RegisterProps) => {
  const { register, handleSubmit, errors, watch } = useForm<Inputs>();
  const singUp = async (userData: RegisterData) => {
    try {
      await authApi.register(userData);
      toast.success(TOAST_MESSAGES.CREATEAD_ACCOUNT, toastifyOptions);
      setView(VIEWS.LOGIN);
    } catch (err) {
      toast.error(TOAST_MESSAGES.GLOBAL_ERROR, toastifyOptions);
    }
  };
  const onSubmit = async (values: Inputs) => {
    const { repeatedPassword, ...rest } = values;
    await singUp(rest);
  };
  return (
    <>
      <ToastContainer />
      <StyledTitle>Join us!</StyledTitle>
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
      <RedirectMessage>
        Already have an account?
        <RedirectButton onClick={() => setView(VIEWS.LOGIN)}>Log in</RedirectButton>
      </RedirectMessage>
    </>
  );
};

export default Register;
