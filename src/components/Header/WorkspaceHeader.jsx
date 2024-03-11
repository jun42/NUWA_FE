import WhiteLogo from '@components/Image/WhiteLogo.jsx';
import SearchBar from '@components/SearchBar/SearchBar.jsx';
import styled from 'styled-components';
import { FaBell } from 'react-icons/fa6';
import { IconButton } from '@chakra-ui/react';
import Alarm from '@components/Alarm/Alarm.jsx';
import { Link } from 'react-router-dom';
const WorkspaceHeader = () => {
  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };
  return (
    <StContainer>
      <Link to="/">
        <WhiteLogo width={'87px'} height={'22px'} />
      </Link>
      <SearchBar>검색창</SearchBar>
      <Alarm />
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
  background-color: #242424;
`;
