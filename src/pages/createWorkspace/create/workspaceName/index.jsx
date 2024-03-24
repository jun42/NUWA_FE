import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from '@components/Image/Image';
import WorksapceNameImg from '@assets/workspace_name.png';
import { useLocation, useNavigate } from 'react-router-dom';

import useBoundStore from '@store/store';
import Form from '@components/Form/createWorkspace/Form';
import { WORKERSPACE_FORM_MESSAGE } from '@constants/workspace/WORKSPACE_FORM_MESSAGE';
import { useEffect, useState } from 'react';

const CreateWorkSapceName = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [workspaceName, setWorkspaceName] = useState('');
  const [, setWorkspaceImage] = useState('');
  const { workspace, setWorkspace } = useBoundStore();
  const { workSpaceName, workSpaceImage } = state || {};

  const handleInputChange = (event) => {
    const { value } = event.target;
    const fristWord = value.charAt(0).toUpperCase();
    setWorkspaceName(value);
    setWorkspaceImage(fristWord);
    setWorkspace({
      ...workspace,
      workSpaceName: value,
      workSpaceImage: fristWord,
    });
  };

  const handleButtonClick = () => {
    if (workspaceName) {
      navigate('/create-workspace/user-info', { state: { ...state } });
    }
  };

  useEffect(() => {
    if (workSpaceName) {
      setWorkspaceName(workSpaceName);
      setWorkspaceImage(workSpaceImage);
    }
  }, [workSpaceName, workSpaceImage]);

  return (
    <Flex alignItems="center" justifyContent="center" h={362} gap="126px">
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
          <Form
            formType="workspaceName"
            w="300px"
            mr=" 12px"
            rounded="50px"
            name="workspaceName"
            border="2px"
            borderColor="#8989897a"
            value={workspaceName}
            placeholder="워크페이스를 입력해주세요."
            onChange={handleInputChange}
            formMessage={WORKERSPACE_FORM_MESSAGE.workspaceName}
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
  );
};

export default CreateWorkSapceName;
