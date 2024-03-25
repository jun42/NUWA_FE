import { useState, useEffect } from 'react';
import BorderCircle from '@assets/border_circle.svg';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';
import ProfileModal from '@components/Modal/ProfileEdit/index.jsx';
import useModal from '@hooks/useModal';
import { useParams } from 'react-router-dom';
import { userProfile } from '@apis/dashboard/userProfile';

const ComponentLogin = () => {
  const { workSpaceId } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const { isOpen, onOpen, onClose } = useModal();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await userProfile(workSpaceId);
        if (data.status === 'success') {
          setUserInfo({
            image:
              data.data.image ||
              'https://search.pstatic.net/sunny/?src=http%3A%2F%2Fthumbnail.10x10.co.kr%2Fwebimage%2Fimage%2Fadd2_600%2F141%2FA001410223_02.jpg%3Fcmd%3Dthumb%26w%3D500%26h%3D500%26fit%3Dtrue%26ws%3Dfalse&type=sc960_832', // 이미지가 없는 경우 대체 이미지 사용
            name: data.data.name,
            job: data.data.job,
            email: data.data.email,
            phone: data.data.phoneNumber,
            status: data.data.status,
          });
        } else {
          throw new Error('프로필 정보를 불러올 수 없습니다.');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, [workSpaceId]);

  const handleProfileSave = (updatedProfile) => {
    setUserInfo(updatedProfile);
    onClose();
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Flex
        flexFlow={'column'}
        height={'100%'}
        align={'center'}
        justify={'center'}
        marginTop={'10px'}
      >
        <Box position="relative" width="150px" height="140px">
          <Image src={BorderCircle} alt="Background SVG" boxSize="100%" />
          <Image
            position="absolute"
            borderRadius="full"
            boxSize="100px"
            src={userInfo.image}
            alt=""
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          />
          {/* <Box
            position="absolute"
            borderRadius={'full'}
            boxSize={'31px'}
            bg={'#3361FF'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            color={'white'}
            fontWeight={'700'}
            fontSize={'14px'}
            top={'60%'}
            left={'70%'}
          >
            2
          </Box> */}
        </Box>
        <Flex flexFlow={'column'} width={'100%'} align={'center'} gap={'8px'}>
          <Box align={'center'}>
            <Text fontSize="20px" fontWeight={'700'}>
              {userInfo.name}
            </Text>
          </Box>
          <Box align={'center'}>
            <Text fontSize="15px" fontWeight={'500'} color={'#656565'}>
              {userInfo.job || '직무를 입력하세요'}
            </Text>
          </Box>

          <Box align={'center'}>
            <Text fontSize="14px" fontWeight={'500'} color={'#656565'}>
              {' '}
              {userInfo.email}
            </Text>
          </Box>
          <Box align={'center'}>
            <Text fontSize="14px" fontWeight={'500'} color={'#656565'}>
              {' '}
              {userInfo.phone}
            </Text>
          </Box>
          <Button
            mt={'5px'}
            onClick={onOpen}
            width={'80%'}
            height={'100%'}
            p={'8px 0px'}
            fontSize="14"
            color="white"
            borderRadius="full"
            bgColor="#575DF8"
          >
            프로필 편집
          </Button>
        </Flex>
      </Flex>

      <ProfileModal
        isOpen={isOpen}
        onClose={onClose}
        profile={userInfo}
        onSave={handleProfileSave}
      />
    </>
  );
};

export default ComponentLogin;
