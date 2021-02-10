import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import postApi from '../../api/post';
import PostList from '../../components/PostList/PostList';
import UserInformation from '../../components/UserInformation/UserInformation';
import userApi from '../../api/user';

const Profile = () => {
  const { username }: { username: string } = useParams();
  const {
    isSuccess: isSuccessUserPosts,
    data: postsData,
    refetch: refetchPosts,
  } = useQuery('posts', async () => postApi.findAll(username));
  const {
    isSuccess: isSuccessUserInfo,
    data: userData,
    refetch: refetchUserData,
  } = useQuery('userData', async () => userApi.userProfile(username));
  useEffect(() => {
    refetchPosts();
    refetchUserData();
  }, [username]);
  return (
    <>
      {isSuccessUserInfo && !!userData?.data && <UserInformation userData={userData.data} />}
      {isSuccessUserPosts && !!postsData?.data?.data?.length && (
        <PostList posts={postsData.data.data} />
      )}
    </>
  );
};

export default Profile;
