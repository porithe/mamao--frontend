import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useInfiniteQuery, useQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import postApi from '../../api/post';
import PostList from '../../components/PostList/PostList';
import UserInformation from '../../components/UserInformation/UserInformation';
import userApi from '../../api/user';
import { InfiniteQueryParam, PageParam } from '../../constants/infiniteScroll';
import { destructurePages } from '../../utils/infiniteScroll';

const Profile = () => {
  const { username }: { username: string } = useParams();
  const {
    data: postsData,
    isSuccess: isSuccessUserPosts,
    fetchNextPage,
    hasNextPage,
    refetch: refetchPosts,
  }: any = useInfiniteQuery(
    'socialTable',
    async ({ pageParam = 0 }: InfiniteQueryParam) => postApi.findAll(username, pageParam),
    {
      getPreviousPageParam: ({ data }: PageParam) => data.paginationNumber ?? false,
      getNextPageParam: ({ data }: PageParam) => data.paginationNumber ?? false,
    },
  );
  const {
    isSuccess: isSuccessUserInfo,
    data: userData,
    refetch: refetchUserData,
  } = useQuery('userData', async () => userApi.userProfile(username));
  useEffect(() => {
    refetchUserData();
    refetchPosts();
  }, [username]);
  return (
    <>
      {isSuccessUserInfo && !!userData?.data && <UserInformation userData={userData.data} />}
      {isSuccessUserPosts && !!destructurePages(postsData.pages).length && (
        <InfiniteScroll
          dataLength={destructurePages(postsData.pages).length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<span />}
          endMessage={<span />}
        >
          <PostList posts={destructurePages(postsData.pages)} />
        </InfiniteScroll>
      )}
    </>
  );
};

export default Profile;
