import { useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import postApi from '../api/post';
import { TOAST_MESSAGES, toastifyOptions } from '../constants/toastify';

const usePost = (isLikedProp: boolean, likeCountProp: number, uuid: string) => {
  const [isLiked, setIsLiked] = useState(isLikedProp);
  const [likeCount, setLikeCount] = useState(likeCountProp);
  const { mutateAsync: mutateLike } = useMutation('likePost', () => postApi.likePost(uuid));
  const { mutateAsync: mutateDisLike } = useMutation('disLikePost', () =>
    postApi.disLikePost(uuid),
  );
  const handleLike = async () => {
    try {
      await mutateLike();
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
    } catch {
      toast.error(TOAST_MESSAGES.GLOBAL_ERROR, toastifyOptions);
    }
  };
  const handleDisLike = async () => {
    try {
      await mutateDisLike();
      setIsLiked(false);
      setLikeCount((prev) => prev - 1);
    } catch {
      toast.error(TOAST_MESSAGES.GLOBAL_ERROR, toastifyOptions);
    }
  };
  return {
    isLiked,
    likeCount,
    handleLike,
    handleDisLike,
  };
};

export default usePost;
