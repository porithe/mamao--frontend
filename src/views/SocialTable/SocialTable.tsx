import React from 'react';
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { StyledSocialTable } from './SocialTable.styles';
import AddPost from '../../components/AddPost/AddPost';
import PostList from '../../components/PostList/PostList';
import postApi from '../../api/post';
import { InfiniteQueryParam, PageParam } from '../../constants/infiniteScroll';
import { destructurePages } from '../../utils/infiniteScroll';

const SocialTable = () => {
  const { data, isSuccess, fetchNextPage, hasNextPage }: any = useInfiniteQuery(
    'socialTable',
    async ({ pageParam = 0 }: InfiniteQueryParam) => postApi.getTablePosts(pageParam),
    {
      getPreviousPageParam: ({ data }: PageParam) => data.paginationNumber ?? false,
      getNextPageParam: ({ data }: PageParam) => data.paginationNumber ?? false,
    },
  );
  return (
    <StyledSocialTable>
      <AddPost />
      {isSuccess && !!destructurePages(data.pages).length && (
        <InfiniteScroll
          dataLength={destructurePages(data.pages).length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<span />}
          endMessage={<span />}
        >
          <PostList posts={destructurePages(data.pages)} />
        </InfiniteScroll>
      )}
    </StyledSocialTable>
  );
};

export default SocialTable;
