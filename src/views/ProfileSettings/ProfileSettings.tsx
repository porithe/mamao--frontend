import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledButton,
} from './ProfileSettings.styles';
import userApi from '../../api/user';
import { TOAST_MESSAGES, toastifyOptions } from '../../constants/toastify';
import { useAuthState } from '../../context/authContext';

type Inputs = {
  avatar?: string;
  description?: string;
};

const ProfileSettings = () => {
  const { username } = useAuthState();
  const { data, isSuccess } = useQuery('userSettingsData', async () =>
    userApi.userProfile(username),
  );
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = async (userData: Inputs) => {
    try {
      await userApi.update(userData);
      toast.success(TOAST_MESSAGES.UPDATED_PROFILE, toastifyOptions);
    } catch {
      toast.error(TOAST_MESSAGES.GLOBAL_ERROR, toastifyOptions);
    }
  };
  if (!isSuccess) {
    return null;
  }
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel htmlFor="avatar">Avatar (url)</StyledLabel>
      <StyledInput
        id="avatar"
        name="avatar"
        ref={register({ minLength: 1, maxLength: 120 })}
        defaultValue={data?.data.avatar}
      />
      <StyledLabel htmlFor="description">Description</StyledLabel>
      <StyledTextarea
        id="description"
        name="description"
        ref={register({ minLength: 1, maxLength: 120 })}
        defaultValue={data?.data.description}
      />
      <StyledButton>Update</StyledButton>
    </StyledForm>
  );
};

export default ProfileSettings;
