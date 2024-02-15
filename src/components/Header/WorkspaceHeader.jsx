import WhiteLogo from '@components/Image/WhiteLogo.jsx';
import SearchBar from '@components/SearchBar/SearchBar.jsx';
import styled from 'styled-components';
import { FaBell } from 'react-icons/fa6';
import { IconButton } from '@chakra-ui/react';
const WorkspaceHeader = () => {
  return (
    <StContainer>
      <WhiteLogo width={'87px'} height={'22px'} />
      <SearchBar>검색창</SearchBar>
      <IconButton
        icon={<FaBell size={'20px'} color="#575dfb" />}
        bgColor={'grey.700'}
        _hover={'grey.700'}
        _active={'grey.700'}
      />
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
