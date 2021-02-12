import React from 'react';
import styled from 'styled-components';
import Post, { PostType } from '../Post/Post';
import COLORS from '../../constants/colors';

const PostListWrapper = styled.ul`
  width: 100%;
  list-style-type: none;
  margin-top: 2rem;
  border-top: 2px solid ${COLORS.GRAY};
  @media (min-width: 768px) {
    margin: 2rem auto;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 600px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 630px;
  }
  @media (min-width: 1281px) {
    width: 650px;
  }
`;

type PostListProps = {
  posts: PostType[];
};

const PostList = ({ posts }: PostListProps) => (
  <PostListWrapper>
    {posts.map((post) => (
      <Post postData={post} key={post.uuid} />
    ))}
  </PostListWrapper>
);

export default PostList;
