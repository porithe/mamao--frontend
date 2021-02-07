import React from 'react';
import { StyledSocialTable } from './SocialTable.styles';
import Search from '../../components/Search/Search';
import AddPost from '../../components/AddPost/AddPost';

const SocialTable = () => (
  <StyledSocialTable>
    <Search />
    <AddPost />
  </StyledSocialTable>
);

export default SocialTable;
