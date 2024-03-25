import { Button } from '@chakra-ui/button';
import { Flex, Text } from '@chakra-ui/layout';
import { useNavigate } from 'react-router';
import useBoundStore from '../../store/store';
import { joinInWorkSpace } from '../../apis/invite/invite';
import styled from 'styled-components';
import { Avatar } from '@chakra-ui/avatar';
import useAuthGuard from '../../hooks/auth/useAuthGuard';
import { Spinner } from '@chakra-ui/spinner';
import { useEffect } from 'react';

const MockMembers = ['ksdfwef', 'lsdfwe', 'ssdlfkqwer', '김모씨', '이모씨'];

const JoinPage = () => {
  const { isAuthChecked } = useAuthGuard();

  const navigate = useNavigate();
  const { invitingWorkSpaceId, resetInviteSlice, isInvited } = useBoundStore(
    (state) => state
  );

  useEffect(() => {
    if (isAuthChecked && !isInvited) {
      alert('초대가 필요합니다.');
      navigate('/');
    }
  }, [isAuthChecked]);
  return (
    <>
      {isAuthChecked && isInvited ? (
        <Flex
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          p={'5rem'}
        >
          <CardContainer>
            <Flex
              flexDirection={'column'}
              justify={'center'}
              align={'center'}
              gap={'32px'}
              width={'100%'}
            >
              <Avatar border={'1px solid #ccc'} name={'?????'} size={'xl'} />
              <Flex
                flexDirection={'column'}
                justify={'center'}
                align={'center'}
              >
                <Text
                  fontSize="20px"
                  fontWeight="700"
                  maxWidth="150px"
                  textAlign={'center'}
                >
                  대화를 시작해보세요!
                </Text>
              </Flex>
              <Flex gap={0}>
                {MockMembers.map((name) => (
                  <Avatar
                    key={name}
                    size={'sm'}
                    border="1px solid #ccc"
                    marginLeft="-5px"
                    name={name}
                    ml={'-0.5rem'}
                  />
                ))}
              </Flex>
            </Flex>
          </CardContainer>
          <Button
            colorScheme="secondary"
            onClick={() => {
              joinInWorkSpace(invitingWorkSpaceId)
                .then((r) => {
                  resetInviteSlice();
                  navigate('/workAccess');
                  return r;
                })
                .catch((err) => {
                  if (err.response.status === 409) {
                    alert('이미 참여한 멤버입니다.');
                    navigate('/workAccess');
                    resetInviteSlice();
                  }
                });

              //api 요청
              // 성공시
              // 상태 리셋
              // workaccess
            }}
          >
            새로운 워크스페이스에 참여하기
          </Button>
        </Flex>
      ) : (
        <Flex
          h="100vh"
          overflowX="hidden"
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Spinner
            thickness="10px"
            speed="0.5s"
            emptyColor="gray.200"
            color="secondary.500"
            width={'200px'}
            height={'200px'}
          />
        </Flex>
      )}
    </>
  );
};

export default JoinPage;

const CardContainer = styled.div`
  max-width: 300px;
  padding: 40px 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 10px 12px 33px 0px rgba(102, 102, 102, 0.1);
  border-radius: 12px;
  margin: 30px 28px;
`;
