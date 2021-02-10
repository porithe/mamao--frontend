import React from 'react';
import { useQuery } from 'react-query';
import { StyledSocialTable } from './SocialTable.styles';
import AddPost from '../../components/AddPost/AddPost';
import PostList from '../../components/PostList/PostList';
import postApi from '../../api/post';

const SocialTable = () => {
  const { isSuccess, data } = useQuery('socialTable', async () => postApi.getTablePosts());
  return (
    <StyledSocialTable>
      <AddPost />
      {isSuccess && !!data?.data?.data?.length && <PostList posts={data.data.data} />}
    </StyledSocialTable>
  );
};

export default SocialTable;
