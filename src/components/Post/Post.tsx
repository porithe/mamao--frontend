import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
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
import postApi from '../../api/post';
import { TOAST_MESSAGES, toastifyOptions } from '../../constants/toastify';

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
  const [isLiked, setIsLiked] = useState(postData.isLiked);
  const [likeCount, setLikeCount] = useState(postData.likeCount);
  const { mutateAsync: mutateLike } = useMutation('likePost', () =>
    postApi.likePost(postData.uuid),
  );
  const { mutateAsync: mutateDisLike } = useMutation('disLikePost', () =>
    postApi.disLikePost(postData.uuid),
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
