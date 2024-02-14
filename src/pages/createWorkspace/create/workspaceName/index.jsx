import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import Image from '@components/Image/Image';
import WorksapceNameImg from '@assets/workspace_name.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CreateWorkSapceName = () => {
  const navigate = useNavigate();
  const [workspaceName, setWorkspaceName] = useState('');
  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value !== '') setWorkspaceName(value);
  };
  const handleButtonClick = () => {
    if (workspaceName) return navigate('/create-workspace/user-info');
  };

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        h={362}
        gap="134px"
      >
        <Box h="362px" w="420px">
          <Text as="p" fontSize="3xl" fontWeight="700" mb="16px">
            <Text as="span" color="#575DFB">
              회사
            </Text>{' '}
            또는{' '}
            <Text as="span" color="#575DFB">
              팀 이름
            </Text>
            을
            <br />
            입력해주세요.
          </Text>
          <Text as="p" fontWeight={500} color="#898989" fontSize="xl">
            NUWA의 워크스페이스 이름이 됩니다.
          </Text>
          <Flex mt="180px">
            <Input
              w="300px"
              mr=" 12px"
              rounded="50px"
              border="2px"
              borderColor="#8989897a"
              defaultValue={workspaceName}
              onChange={handleInputChange}
            />
            <Button
              rounded="50px"
              w="140px"
              bg="#575DFB"
              color="#fff"
              onClick={handleButtonClick}
            >
              다음
            </Button>
          </Flex>
        </Box>
        <Box w={380}>
          <Image src={WorksapceNameImg} alt="workspace-name-img" />
        </Box>
      </Flex>
    </>
  );
};

export default CreateWorkSapceName;
