import styled from 'styled-components';
import { Flex, Text, Button } from '@chakra-ui/react';
import WorkspaceCard from './WorkspaceCard';
import { workspace_section } from '@constants/selectPlan/SELECT_ALL_INFO';

const workAccess = () => {
  return (
    <StContainer>
      <WorkspaceContainer>
        <Flex
          flexDirection={'column'}
          gap={'20px'}
          marginTop={'-80px'}
          marginBottom={'78px'}
        >
          <Text width="100%" fontSize="42px" fontWeight="650" color="#575DF8">
            환영합니다!
          </Text>
          <Text width="100%" fontSize="25px" fontWeight="380">
            test123456@gmail.com의 워크스페이스
          </Text>
        </Flex>
        <WorkspaceCard workspace_section={workspace_section} />
        <Flex
          flexDirection={'column'}
          //border={'1px solid blue'}
          marginTop={'120px'}
        >
          <Text width="100%" fontSize="22px" fontWeight="280">
            {' '}
            다른 이메일로 로그인{' '}
          </Text>
        </Flex>
      </WorkspaceContainer>
    </StContainer>
  );
};

export default workAccess;

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const WorkspaceContainer = styled.div`
  width: 100%;
  height: 896px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  //border: 1px solid black;

