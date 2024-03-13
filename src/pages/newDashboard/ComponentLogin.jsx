import { useState, useEffect } from 'react';
import BorderCircle from '@assets/border_circle.svg';
import {
  Box,
  Image,
  Text,
  Button,
  VStack,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import ProfileModal from '@components/Modal/ProfileEdit/index.jsx';
import useModal from '@hooks/useModal';
import { useParams } from 'react-router-dom';
import { request } from '../../apis/axios/axios';

const ComponentLogin = () => {
  const { workSpaceId } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const { isOpen, onOpen, onClose } = useModal();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await request.get(`/workspace/${workSpaceId}/member`);
        if (response.data.status === 'success') {
          setUserInfo({
            imageUrl:
              response.data.data.image ||
              'https://search.pstatic.net/sunny/?src=http%3A%2F%2Fthumbnail.10x10.co.kr%2Fwebimage%2Fimage%2Fadd2_600%2F141%2FA001410223_02.jpg%3Fcmd%3Dthumb%26w%3D500%26h%3D500%26fit%3Dtrue%26ws%3Dfalse&type=sc960_832', // 이미지가 없는 경우 대체 이미지 사용
            name: response.data.data.name,
            position: response.data.data.job,
            email: response.data.data.email,
            phone: response.data.data.phoneNumber,
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

  // 프로필 정보가 로딩 중이거나 조회되지 않았을 경우의 처리
  if (!userInfo) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Flex
        flexFlow={'column'}
        height={'100%'}
        border={'1px solid red'}
        align={'center'}
        justify={'center'}
        marginTop={'10px'}
      >
        <Box
          position="relative"
          width="150px"
          height="140px"
          border={'1px solid green'}
        >
          <Image src={BorderCircle} alt="Background SVG" boxSize="100%" />
          <Image
            position="absolute"
            borderRadius="full"
            boxSize="110px"
            src={userInfo.imageUrl}
            alt=""
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          />
          <Box
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
          </Box>
        </Box>
        <Flex
          flexFlow={'column'}
          width={'100%'}
          align={'center'}
          gap={'8px'}
          border={'1px solid blue'}
        >
          <Box align={'center'}>
            <Text fontSize="20px" fontWeight={'700'}>
              {userInfo.name}
            </Text>
            <Text fontSize="15px" fontWeight={'700'}>
              {userInfo.position}
            </Text>
          </Box>

          <Box align={'center'}>
            <Text fontSize="14px" fontWeight={'500'} color={'#656565'}>
              {' '}
              {userInfo.email}
            </Text>
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
