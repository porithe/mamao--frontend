import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import userApi from '../api/user';
import { toastifyOptions, TOAST_MESSAGES } from '../constants/toastify';

const useFollow = (username: string, isFollowedProp: boolean, followersCountProp: number) => {
  const [isFollowed, setIsFollowed] = useState(isFollowedProp);
  useEffect(() => setFollowersCount(followersCountProp), [followersCountProp]);
  const [followersCount, setFollowersCount] = useState(followersCountProp);
  const { mutateAsync: mutateFollow } = useMutation('followUser', () => userApi.follow(username));
  const { mutateAsync: mutateUnFollow } = useMutation('unFollowUser', () =>
    userApi.unFollow(username),
  );
  const handleFollow = async () => {
    try {
      await mutateFollow();
      setIsFollowed(true);
      setFollowersCount((prev) => prev + 1);
    } catch {
      toast.error(TOAST_MESSAGES.GLOBAL_ERROR, toastifyOptions);
    }
  };
  const handleUnFollow = async () => {
    try {
      await mutateUnFollow();
      setIsFollowed(false);
      setFollowersCount((prev) => prev - 1);
    } catch {
      toast.error(TOAST_MESSAGES.GLOBAL_ERROR, toastifyOptions);
    }
  };
  const toggleFollow = async () => {
    if (isFollowed) {
      await handleUnFollow();
    } else {
      await handleFollow();
    }
  };
  return {
    toggleFollow,
    isFollowed,
    followersCount,
  };
};

export default useFollow;
