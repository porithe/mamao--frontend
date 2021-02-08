import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { ReactComponent as LikeSVG } from '../../assets/svg/heart.svg';
import { ReactComponent as LikeRedSVG } from '../../assets/svg/heart-red.svg';
import { ReactComponent as CommentSVG } from '../../assets/svg/comment.svg';

export const PostItem = styled.li`
  width: 100%;
  display: flex;
  padding: 1.5rem 1.6rem;
  border-bottom: 1px solid ${COLORS.GRAY};
`;

export const Avatar = styled.div`
  background-color: pink;
  width: 55px;
  height: 55px;
  border-radius: 100%;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 60px;
    height: 60px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 65px;
    height: 65px;
  }
  @media (min-width: 1281px) {
    width: 70px;
    height: 70px;
  }
`;

export const PostDataWrapper = styled.div`
  flex: 1;
  margin-left: 1.3rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 1.5rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 1.75rem;
  }
  @media (min-width: 1281px) {
    margin-left: 2.1rem;
  }
`;

export const PostDataHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Username = styled.p`
  font-size: 0.9rem;
  color: ${COLORS.DARK_BLUE};
  font-weight: 800;
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

export const Date = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${COLORS.DARK_GRAY};
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.85rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 0.95rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.05rem;
  }
`;

export const PostText = styled.p`
  font-size: 0.8rem;
  color: ${COLORS.DARK_BLUE};
  font-weight: 400;
  margin: 0.7rem 0;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.85rem;
    margin: 0.8rem 0;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 0.95rem;
    margin: 0.85rem 0;
  }
  @media (min-width: 1281px) {
    font-size: 1.05rem;
    margin: 1rem 0;
  }
`;

export const PostDataFooter = styled.div`
  display: flex;
  align-items: center;
`;

export const Interaction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-last-of-type(1) {
    margin-left: 1.3rem;
  }
`;

export const InteractionText = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${COLORS.DARK_BLUE};
  margin-left: 0.4rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.05rem;
  }
  @media (min-width: 1281px) {
    font-size: 1.1rem;
  }
`;

export const ShadowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const StyledLikeSVG = styled(LikeSVG)`
  width: 24px;
  height: 24px;
  @media (min-width: 1025px) {
    width: 26px;
    height: 26px;
  }
`;

export const StyledLikeRedSVG = styled(LikeRedSVG)`
  width: 24px;
  height: 24px;
  @media (min-width: 1025px) {
    width: 26px;
    height: 26px;
  }
`;

export const StyledCommentSVG = styled(CommentSVG)`
  width: 24px;
  height: 24px;
  @media (min-width: 1025px) {
    width: 26px;
    height: 26px;
  }
`;
