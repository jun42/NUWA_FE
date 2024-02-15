import React from 'react';
import WhiteLogo from '@components/Image/WhiteLogo.jsx';
import SearchBar from '@components/SearchBar/SearchBar.jsx';
import styled from 'styled-components';
const WorkspaceHeader = () => {
  return (
    <StContainer>
      <WhiteLogo width={'87px'} height={'22px'} />
      <SearchBar>검색창</SearchBar>
      <Icon>알림</Icon>
    </StContainer>
  );
};

export default WorkspaceHeader;

const StContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 30px;
  align-items: center;
  justify-content: space-between;
  background-color: black;
`;

const Icon = styled.div``;
