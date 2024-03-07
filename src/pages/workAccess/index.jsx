import React, { useEffect, useState } from 'react';
import { fetchWorkspace } from '../../apis/workspace/workAccess';
import styled from 'styled-components';
import { Flex, Text, Button } from '@chakra-ui/react';
import WorkspaceCard from './WorkspaceCard';
import useBoundStore from '../../store/store';
import { jwtDecode } from 'jwt-decode';
import { getToken } from '@utils/auth';
import { workspace_section } from '@constants/selectPlan/SELECT_ALL_INFO';

const workAccess = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const { email } = useBoundStore((state) => ({ email: state.email }));

  const token = getToken();
  const decoded = jwtDecode(token);
  const emailSlice = decoded.sub.split('@')[0];

  useEffect(() => {
    const initWorkspaces = async () => {
      try {
        const data = await fetchWorkspace();
        setWorkspaces(data);
      } catch (error) {
        console.error(
          '워크스페이스 정보를 불러오는 중 오류가 발생했습니다',
          error
        );
      } finally {
        setLoading(false);
      }
    };

    initWorkspaces();
  }, []);

  if (loading) {
    return <div> 로딩 중</div>;
  }

  return (
    <StContainer>
      <WorkspaceContainer>
        <Flex flexDirection={'column'} gap={'10px'}>
          <Text width="100%" fontSize="48px" fontWeight="600" color="#575DF8">
            환영합니다!
          </Text>
          <Text width="100%" fontSize="22px" fontWeight="250">
            {email ? `${emailSlice}의 워크스페이스` : '워크스페이스'}
          </Text>
        </Flex>
        <WorkspaceCard workspace_section={workspaces} />
        {workspaces.length > 0 ? (
          workspaces.map((workspace) => (
            <WorkspaceCard key={workspace.workspaceId} workspace={workspace} />
          ))
        ) : (
          <Text>가입된 워크스페이스가 없습니다.</Text>
        )}

        <Flex flexDirection={'column'}>
          <Text width="100%" fontSize="20px" fontWeight="200">
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
  //max-width: 1920px ;
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
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
