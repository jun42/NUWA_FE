import React, { useEffect, useState } from 'react';
import { Flex, Box, Text, Avatar, Image } from '@chakra-ui/react';
import StateModal from '@components/Modal/StateModal';
import useModal from '@hooks/useModal';
import { getProfile } from '../../apis/sidebar/getProfile';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { state_seticon } from '@constants/selectPlan/SELECT_STATE_INFO';

const UserInfo = () => {
  const { workSpaceId } = useParams();
  const { isOpen, onOpen, onClose } = useModal();
  // const [userProfile, setUserProfile] = useState({});

  // useEffect(() => {
  //   const getUserProfile = async () => {
  //     try {
  //       const response = await getProfile(workSpaceId);
  //       setUserProfile(response.data);
  //       console.log('데이터가 성공적으로 들어왔습니다.', response.data);
  //     } catch (error) {
  //       console.error('프로필 정보를 가져오는데 실패했습니다:', error);
  //     }
  //   };
  //   getUserProfile();
  // }, [workSpaceId]);

  const {
    isLoading,
    error,
    data: profileData,
    refetch: refetchUserProfile,
  } = useQuery({
    queryKey: ['userProfile', workSpaceId],
    queryFn: () => getProfile(workSpaceId),
    select: (response) => ({
      ...response.data,
      status: response.data.status ?? '현재 활동 중',
    }),
    enabled: !!workSpaceId,
  });

  const userProfile = profileData ? profileData : { image: undefined };

  const StatusIcon = state_seticon.find(
    (status) => status.title === userProfile.status
  )?.icon;

  const userStatus = userProfile ? userProfile.status : '현재 활동 중';
  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        m="20px 0"
        position="relative"
      >
        <Box
          w="30px"
          h="30px"
          fontSize="12px"
          fontWeight="900"
          color="white"
          backgroundColor="#3361ff"
          borderRadius="70%"
          lineHeight="30px"
          position="absolute"
          right="75px"
          bottom="130px"
          zIndex="10"
        >
          2
        </Box>
        <Flex
          justify="center"
          align="center"
          w="150px"
          h="150px"
          border="2px solid #3361ff"
          borderRight="2px solid #DADEE6"
          borderRadius="70%"
          m="28px"
        >
          <Avatar
            size="2xl"
            src={userProfile.image !== 'N' ? userProfile.image : undefined}
          />
        </Flex>
        <Box m="13px 0">
          <Text fontSize="16px" fontWeight="900" color="#656565">
            {userProfile.name} 님
          </Text>
          <Text fontSize="14px" fontWeight="500" color="#656565">
            {userProfile.email}
          </Text>
        </Box>
        <Flex
          fontSize="14px"
          fontWeight="500"
          color="#898989"
          cursor={'pointer'}
          onClick={onOpen}
          align={'center'}
          justify="center"
        >
          <Image src={StatusIcon} alt="" m="0 3px" boxSize={'14px'} />
          {userStatus}
        </Flex>
      </Flex>
      <StateModal
        isOpen={isOpen}
        onClose={onClose}
        workSpaceId={workSpaceId}
        refetchUserProfile={refetchUserProfile}
      />
    </>
  );
};

export default UserInfo;
