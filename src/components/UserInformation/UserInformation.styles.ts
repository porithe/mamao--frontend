import styled from 'styled-components';
import COLORS from '../../constants/colors';

type FollowButtonProps = {
  isFollowed: boolean;
};

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin: 2rem 0 0 0;
  @media (min-width: 768px) {
    margin: 2rem auto 0 auto;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 730px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 750px;
  }
  @media (min-width: 1281px) {
    width: 800px;
  }
`;

export const UserInformationHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 75px;
    height: 75px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 80px;
    height: 80px;
  }
  @media (min-width: 1281px) {
    width: 85px;
    height: 85px;
  }
`;

export const Username = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${COLORS.DARK_BLUE};
  margin-left: 0.625rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.3rem;
  }
`;

export const FollowButton = styled.button<FollowButtonProps>`
  padding: 0.5rem 1rem;
  background-color: ${({ isFollowed }) => (isFollowed ? COLORS.WHITE : COLORS.PURPLE)};
  color: ${({ isFollowed }) => (isFollowed ? COLORS.PURPLE : COLORS.WHITE)};
  font-weight: 600;
  font-size: 1rem;
  margin-left: auto;
  border-radius: 40px;
  border: 2px solid ${({ isFollowed }) => (isFollowed ? COLORS.PURPLE : COLORS.WHITE)};
  outline: none;
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.3rem;
    padding: 0.8rem 1.4rem;
  }
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: ${COLORS.DARK_BLUE};
  font-weight: 400;
  margin: 1rem 0;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.2rem;
    margin: 1.5rem 0;
  }
`;

export const JoinedDate = styled.p`
  font-size: 0.9rem;
  color: ${COLORS.DARK_GRAY};
  font-weight: 500;
  margin: 1rem 0;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.2rem;
  }
`;

export const Footer = styled.div`
  display: flex;
`;

export const SocialInfo = styled.p`
  font-size: 0.9rem;
  color: ${COLORS.DARK_GRAY};
  font-weight: 500;
  &:nth-last-of-type(1) {
    margin-left: 0.625rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.2rem;
  }
`;

export const SocialInfoCount = styled.span`
  font-weight: 700;
  color: ${COLORS.DARK_BLUE};
  margin-right: 0.3125rem;
`;
