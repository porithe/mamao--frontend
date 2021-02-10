import React from 'react';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import {
  Wrapper,
  UserInformationHeader,
  UserAvatar,
  Username,
  FollowButton,
  Description,
  JoinedDate,
  Footer,
  SocialInfo,
  SocialInfoCount,
} from './UserInformation.styles';
import useFollow from '../../utils/useFollow';
import { useAuthState } from '../../context/authContext';

type UserData = {
  username: string;
  description: string;
  avatar: string;
  following: number;
  followers: number;
  createdAt: string;
  isFollowed: boolean;
};

type UserInformationProps = {
  userData: UserData;
};

const UserInformation = ({ userData }: UserInformationProps) => {
  const { username: AuthUsername } = useAuthState();
  const { username }: { username: string } = useParams();
  const { toggleFollow, isFollowed, followersCount } = useFollow(
    userData.username,
    userData.isFollowed,
    userData.followers,
  );
  return (
    <Wrapper>
      <UserInformationHeader>
        <UserAvatar />
        <Username>{`@${userData.username}`}</Username>
        {AuthUsername !== username && (
          <FollowButton onClick={toggleFollow} isFollowed={isFollowed}>
            {isFollowed ? 'Unfollow' : 'Follow'}
          </FollowButton>
        )}
      </UserInformationHeader>
      <Description>{userData.description}</Description>
      <JoinedDate>{`Joined ${dayjs(userData.createdAt).format('MMMM YYYY')}`}</JoinedDate>
      <Footer>
        <SocialInfo>
          <SocialInfoCount>{userData.following}</SocialInfoCount>
          Following
        </SocialInfo>
        <SocialInfo>
          <SocialInfoCount>{followersCount}</SocialInfoCount>
          Followers
        </SocialInfo>
      </Footer>
    </Wrapper>
  );
};

export default UserInformation;
