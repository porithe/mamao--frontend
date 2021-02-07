import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { StyledForm, StyledTextArea, StyledButton } from './AddPost.styles';
import postApi from '../../api/post';
import { TOAST_MESSAGES, toastifyOptions } from '../../constants/toastify';

const AddPost = () => {
  const { register, handleSubmit, errors, reset } = useForm<{ post: string }>();
  const onSubmit = async ({ post }: { post: string }) => {
    try {
      await postApi.addPost(post);
      toast.success(TOAST_MESSAGES.POST_ADDED, toastifyOptions);
      reset();
    } catch {
      toast.error(TOAST_MESSAGES.GLOBAL_ERROR, toastifyOptions);
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledTextArea
        placeholder="What's happening?"
        name="post"
        ref={register({
          required: true,
          minLength: 1,
          maxLength: 140,
        })}
        isError={!!errors.post}
      />
      <StyledButton type="submit">Add</StyledButton>
    </StyledForm>
  );
};

export default AddPost;
