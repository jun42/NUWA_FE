import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Text,
  Flex,
  Box,
  Button,
  Textarea,
  Image,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import IconImage from '@assets/workspace_card3.png';
import SearchBar from '@components/SearchBar/WorkspaceSearchBar';
import { useParams } from 'react-router-dom';
import { workspaceMemberList } from '@apis/workspace/workspaceMemberList';
import { inviteLink } from '@apis/link/invitationLink';
import { createInviteLink } from '@apis/link/createInviteLink';
import { changeMemberRole } from '../../apis/workspace/changeMemberRole';
import permission from '@assets/permission.png';

const AddUser = () => {
  const { workSpaceId } = useParams();
  const [members, setMembers] = useState([]);
  const [emailInput, setEmailInput] = useState('');
  const [createLink, setcreateLink] = useState('');

  const handleChangeRole = async (workSpaceMemberId, type) => {
    const { success, data, message } = await changeMemberRole(
      workSpaceMemberId,
      workSpaceId,
      type
    );
    if (success) {
      alert(`권한 변경 성공: ${data.message}`);
      // 성공 후 멤버 목록 업데이트 로직 필요 (예시로는 상태 업데이트 또는 다시 fetchMembers 호출)
      fetchMembers(); // 멤버 목록 다시 가져오기 (이 함수는 이미 정의된 상태에서 호출)
    } else {
      alert(`권한 변경 실패: ${message}`);
    }
  };

  useEffect(() => {
    const generateInviteLink = async () => {
      try {
        const response = await createInviteLink(workSpaceId);
        if (response.status === 'success') {
          setcreateLink(response.data.link);
        } else {
          console.error('초대 링크 생성에 실패했습니다:', response.message);
        }
      } catch (error) {
        console.error('초대 링크 생성 과정에서 오류 발생:', error);
      }
    };

    generateInviteLink();
  }, [workSpaceId]);

  const handleInvite = async () => {
    const emailAddresses = emailInput
      .split(',')
      .map((email) => email.trim())
      .filter((email) => email !== ''); // 빈 문자열 제거

    if (emailAddresses.length === 0) {
      alert('유효한 이메일 주소를 입력하세요.');
      return;
    }

    try {
      const response = await inviteLink(workSpaceId, emailAddresses);
      console.log('초대 링크 생성 성공:', response);
      alert('초대 메일이 성공적으로 발송되었습니다.');
      setEmailInput('');
    } catch (error) {
      console.error('초대 링크 생성 실패', error);
      alert('초대 메일 발송에 실패하였습니다.');
    }
  };

  useEffect(() => {
    const fetchMembers = async () => {
      const data = await workspaceMemberList(workSpaceId);
      if (data && data.status === 'success') {
        setMembers(data.data);
      } else {
        console.error('멤버를 조회할 수 없습니다.');
      }
    };

    fetchMembers();
  }, [workSpaceId]);

  return (
    <StContainer>
      <TopSection>
        <Text fontSize={'28px'} fontWeight={'680'}>
          사용자 추가
        </Text>

        <Text fontSize={'15px'} fontWeight={'420'} color={'#5d5d5d'}>
          NUWA가 작동하는 걸 보려면, 사람들이 좀 더 필요합니다. 가장 이야기를
          많이 나누는 팀원 중 일부를 초대하세요.
        </Text>

        <Flex gap={'10px'}>
          <Textarea
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="예 :  example@email.com, example@email.com"
            border={'2px solid #F2F2F2'}
            color={'#606060'}
            size={'16px'}
            width={'70%'}
            height={'100%'}
            resize={'none'}
            sx={{
              '::placeholder': {
                color: '#5d5d5d',
                fontSize: '16px',
              },
            }}
          />

          <Button
            p={'0px 30px'}
            color={'white'}
            bg={'#575DFB'}
            borderRadius={'18px'}
            onClick={handleInvite}
          >
            추가
          </Button>
        </Flex>

        <Flex gap={'12px'} fontSize={'16px'}>
          <Text color={'#5d5d5d'} fontWeight={'380'}>
            또는 전체 팀에게 이 링크 전송:
          </Text>
          <Text color={'#5d5d5d'}>{createLink}</Text>
          <Text
            color={'#575DFB'}
            fontWeight={'510'}
            cursor={'pointer'}
            onClick={() => navigator.clipboard.writeText(createLink)}
          >
            초대 링크 복사
          </Text>
        </Flex>
      </TopSection>

      <BottomSection>
        <Flex gap={'10px'} marginBottom={'-10px'}>
          <Button
            borderRadius={'full'}
            fontSize={'14px'}
            fontWeight={'500'}
            p={'12px 26px'}
            color={'#FFFFFF'}
            bgColor={'#575DFB'}
          >
            멤버
          </Button>
          <Button
            borderRadius={'full'}
            fontSize={'14px'}
            fontWeight={'500'}
            p={'12px 26px'}
            bgColor={'#FFFFFF'}
            border={'1px solid #575DFB'}
            color={'#575DFB'}
          >
            사용자 그룹
          </Button>
        </Flex>

        <SearchBar />

        <UserDataContainer>
          <Grid
            templateColumns="repeat(auto-fill, minmax(180px, 1fr))"
            gap={'6'}
          >
            {members.map((member, index) => (
              <Flex key={`member-${index}`} justify={'space-between'}>
                <UserData>
                  <Box>
                    <Image src={IconImage} boxSize="full" />
                  </Box>
                  <Flex flexDirection={'colunm'}>
                    <Box
                      p={' 10px 20px'}
                      //border={'1px solid red'}
                      width={'90%'}
                    >
                      <Text fontWeight={'700'}>{member.name}</Text>
                      <Text
                        fontSize={'12px'}
                        fontWeight={'500'}
                        color={'#797979'}
                      >
                        {member.email}
                      </Text>
                    </Box>
                    <Box width={'10%'}>
                      <Menu>
                        <MenuButton as={Button} variant="unstyled">
                          <img src={permission} alt="권한 변경" />
                        </MenuButton>
                        <MenuList>
                          <MenuItem
                            onClick={() =>
                              handleChangeRole(member.id, 'CREATED')
                            }
                          >
                            관리자 변경
                          </MenuItem>
                          <MenuItem
                            onClick={() => handleChangeRole(member.id, 'JOIN')}
                          >
                            권한 제거
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Box>
                  </Flex>
                </UserData>
              </Flex>
            ))}
          </Grid>
        </UserDataContainer>
      </BottomSection>
    </StContainer>
  );
};

export default AddUser;

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: auto;
  margin: 0px 50px;
  justify-content: space-evenly;
`;

const TopSection = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #fbfbfb;
  margin-top: 62px;
  gap: 10px;
`;

const BottomSection = styled.div`
  height: 70%;
  display: flex;
  flex-flow: column;
  margin-top: 60px;
  background-color: #ffffff;
`;

const UserDataContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const UserData = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  border: 1px solid #d9d9d9;
  border-radius: 22px;
  overflow: hidden;
`;
