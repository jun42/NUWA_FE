import React from 'react';
import styled from 'styled-components';
import {
  Text,
  Flex,
  Box,
  Divider,
  Button,
  Textarea,
  Image,
  Grid,
} from '@chakra-ui/react';
import OutletSearchBar from '@components/SearchBar/OutletSearchBar';
import IconImage from '@assets/workspace_card3.png';

const AddUser = () => {
  const userDataExample = Array(20).fill({
    name: '김뿌꾸',
    email: 'khs43833@gmail.com',
  });

  return (
    <StContainer>
      <TopSection>
        <Text fontSize={'20px'} fontWeight={'700'}>
          사용자 추가
        </Text>

        <Text fontSize={'14px'} fontWeight={'700'} color={'grey'}>
          NUWA가 작동하는 걸 보려면, 사람들이 좀 더 필요합니다. 가장 이야기를
          많이 나누는 팀원 중 일부를 초대하세요.
        </Text>

        <Flex gap={'10px'}>
          <Textarea
            placeholder="예: example@email.com,example@email.com"
            size={'lg'}
            width={'70%'}
            height={'100%'}
            resize={'none'}
          />

          <Button p={'0px 30px'} color={'white'} bg={'#575DFB'}>
            추가
          </Button>
        </Flex>

        <Flex gap={'10px'} fontSize={'14px'}>
          <Text color={'grey'}>또는 전체 팀에게 이 링크 전송:</Text>
          <Text>
            https://join.nuwa.com/t/nuwaproject/shared_invice/ztsdfsdfa...
          </Text>
          <Text color={'#575DFB'} fontWeight={'700'} cursor={'pointer'}>
            초대 링크 복사
          </Text>
        </Flex>
      </TopSection>

      <BottomSection>
        <Flex gap={'10px'}>
          <Button
            borderRadius={'full'}
            fontSize={'14px'}
            fontWeight={'500'}
            p={'12px 26px'}
          >
            멤버
          </Button>

          <Button
            borderRadius={'full'}
            fontSize={'14px'}
            fontWeight={'500'}
            p={'12px 26px'}
          >
            사용자 그룹
          </Button>
        </Flex>

        <OutletSearchBar />

        <UserDataContainer>
          <Grid
            templateColumns="repeat(auto-fill, minmax(180px, 1fr))"
            gap={'5'}
          >
            {userDataExample.map((user, index) => (
              <Flex justify={'space-between'}>
                <UserData key={index}>
                  <Box>
                    <Image src={IconImage} boxSize="full" />
                  </Box>

                  <Box p={' 10px 20px'}>
                    <Text fontWeight={'700'}>{user.name}</Text>
                    <Text
                      fontSize={'14px'}
                      fontWeight={'500'}
                      color={'#797979'}
                    >
                      {user.email}
                    </Text>
                  </Box>
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
  justify-content: space-evenly;
  border: 1px solid blue;
`;

const TopSection = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #fbfbfb;
  gap: 10px;
  border: 1px solid red;
`;

const BottomSection = styled.div`
  height: 100%;
  height: 70%;
  display: flex;
  flex-flow: column;
  background-color: #ffffff;
  border: 1px solid green;
`;

const UserDataContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid purple;
  overflow-y: auto;
`;

const UserData = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  border: 1px solid #d9d9d9;
`;
