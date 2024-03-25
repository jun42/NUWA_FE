import DefaultBreak from '@components/Paragraph/BreakParagraph/DefaultBreak';
import Paragraph from '@components/Paragraph/Paragraph';
import Form from '@components/Form/createWorkspace/Form';
import Image from '@components/Image/Image';
import { Box, Flex } from '@chakra-ui/react';
import WorkInfoImg from '@assets/work-info.png';
import { useNavigate } from 'react-router-dom';
import useBoundStore from '@store/store';
import { useState } from 'react';
import { useCreateWorkspace } from '@queries/useCreateWorkspace';

const Work = () => {
  const navigate = useNavigate();
  const { workspace, setWorkspace, setNewWorkSpaceId } = useBoundStore();
  const { mutation } = useCreateWorkspace();
  const [workspaceUrl, setWorkspaceUrl] = useState('');
  const [workSpaceIntroduce, setWorkSpaceIntroduce] = useState('');

  const handleButtonClick = async (event) => {
    const { name } = event.target;
    if (name === 'next') {
      const urlData = await mutation.mutateAsync(workspace);
      setNewWorkSpaceId(urlData.data.workSpaceId);
      setWorkspaceUrl(urlData);
      navigate('/create-workspace/invite-member', {
        state: { workspaceUrl: workspaceUrl },
      });
    } else return navigate(-1);
  };
  const handleChange = (event) => {
    const { value } = event.target;
    // console.log(value);
    setWorkSpaceIntroduce(value);
    setWorkspace({ ...workspace, workSpaceIntroduce: value });
  };
  return (
    <Flex align={'center'} justifyContent="center" gap={'100px'}>
      <Flex flexDirection="column">
        <Box>
          <DefaultBreak
            mb="80px"
            fontSize="3xl"
            fontWeight="700"
            firstText="현재 팀은 어떤 업무를"
            secondText="진행하고 있나요?"
          />
          <Paragraph color="#898989 " mb="12px">
            NUWA에서 자유롭게 업무 협력하세요.
          </Paragraph>
        </Box>
        <Form
          formType="workInfo"
          value={workSpaceIntroduce}
          onClick={handleButtonClick}
          onChange={handleChange}
        />
      </Flex>
      <Box w="600px">
        <Image src={WorkInfoImg} />
      </Box>
    </Flex>
  );
};

export default Work;
