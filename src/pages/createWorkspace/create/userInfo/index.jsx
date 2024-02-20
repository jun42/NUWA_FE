import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Image from '@components/Image/Image';
import UserInfoImg from '@assets/user-info.png';
import { Link, useNavigate } from 'react-router-dom';
import CreateProfileImage from '@components/Modal/ProfileModal/create/CreateProfileImage';
import Form from '@components/Form/createWorkspace/Form';
import { WORKERSPACE_FORM_MESSAGE } from '@constants/workspace/WORKSPACE_FORM_MESSAGE';
import { useState } from 'react';
import useBoundStore from '@store/store';

const UserInfo = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userInfo, setUserInfo] = useState({
    userName: '',
    userJob: '',
    profile: '',
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const { workspace } = useBoundStore();
  console.log(workspace.workSpaceName);
  const handleButttonClick = () => {
    navigate('/create-workspace/work');
  };
  return (
    <>
      <CreateProfileImage
        isOpen={isOpen}
        onClose={onClose}
        userInfo={userInfo}
      />
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="930px"
        h="400px"
      >
        <Flex flexDirection="column">
          <Box>
            <Text as="p" fontSize="3xl" fontWeight={700}>
              <Text as="span" color="#5158FF">
                사용자의 정보
              </Text>
              를<br />
              입력해주세요.
            </Text>
            <Text
              as="p"
              mt="20px"
              fontSize="md"
              color="#898989"
              fontWeight={600}
            >
              사용자의 정보를 추가하면 팀원이 사용자를
              <br /> 쉽게 알아보고 연결하는 데 도움이 됩니다
            </Text>
          </Box>
          <Box>
            <Form
              formType="userInfo"
              w="320px"
              mr=" 12px"
              rounded="50px"
              border="2px"
              borderColor="#8989897a"
              formMessage={WORKERSPACE_FORM_MESSAGE.userInfo}
              userNameValue={userInfo.userName}
              userJobValue={userInfo.userJob}
              onChange={handleFormChange}
            />
            <ButtonGroup
              justifyContent="space-between"
              flexDirection="column"
              spacing="0"
              w="320px"
            >
              <Button rounded="50px" onClick={onOpen}>
                프로필 설정하기
              </Button>
              <ButtonGroup mt="10px" w="320px">
                <Link to="/create-workspace/workspace-name" state={{...workspace}}>
                  <Button rounded="50px" w="170px" name="prev">
                    이전
                  </Button>
                </Link>
                <Button
                  rounded="50px"
                  w="170px"
                  name="next"
                  onClick={handleButttonClick}
                >
                  다음
                </Button>
              </ButtonGroup>
            </ButtonGroup>
          </Box>
        </Flex>
        <Box w={400}>
          <Image src={UserInfoImg} alt="" />
        </Box>
      </Flex>
    </>
  );
};

export default UserInfo;
