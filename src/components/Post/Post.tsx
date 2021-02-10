import React from 'react';
import dayjs from 'dayjs';
import {
  Avatar,
  Date,
  Interaction,
  InteractionText,
  PostDataHeader,
  PostDataFooter,
  PostDataWrapper,
  PostItem,
  PostText,
  Username,
  ShadowButton,
  StyledCommentSVG,
  StyledLikeRedSVG,
  StyledLikeSVG,
} from './Post.styles';
import usePost from '../../utils/usePost';

export type PostType = {
  author: {
    username: string;
  };
  uuid: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  authorUuid: string;
  commentCount: number;
  likeCount: number;
  isLiked: boolean;
};

type PostProps = {
  postData: PostType;
};

const Post = ({ postData }: PostProps) => {
  const { isLiked, likeCount, handleLike, handleDisLike } = usePost(
    postData.isLiked,
    postData.likeCount,
    postData.uuid,
  );
  return (
    <PostItem>
      <Avatar />
      <PostDataWrapper>
        <PostDataHeader>
          <Username>{`@${postData.author.username}`}</Username>
          <Date>{dayjs(postData.createdAt).format('MMMM DD, YYYY')}</Date>
        </PostDataHeader>
        <PostText>{postData.text}</PostText>
        <PostDataFooter>
          <Interaction>
            {isLiked ? (
              <ShadowButton onClick={handleDisLike}>
                <StyledLikeRedSVG />
              </ShadowButton>
            ) : (
              <ShadowButton onClick={handleLike}>
                <StyledLikeSVG />
              </ShadowButton>
            )}
            <InteractionText>{likeCount}</InteractionText>
          </Interaction>
          <Interaction>
            <ShadowButton>
              <StyledCommentSVG />
            </ShadowButton>
            <InteractionText>{postData.commentCount}</InteractionText>
          </Interaction>
        </PostDataFooter>
      </PostDataWrapper>
    </PostItem>
  );
};

export default Post;
