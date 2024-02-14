import DefaultBreak from '@components/Paragraph/BreakParagraph/DefaultBreak';
import Paragraph from '@components/Paragraph/Paragraph';
import Form from '@components/Form/createWorkspace/Form';
import Image from '@components/Image/Image';
import { Box, Flex } from '@chakra-ui/react';
import WorkInfoImg from '@assets/work-info.png';
import { useNavigate } from 'react-router-dom';
const Work = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = (event) => {
    const { name } = event.target;
    if (name === 'next') return navigate('/create-workspace/invite-member');
    return navigate(-1);
  };
  return (
    <Flex justifyContent="space-around" w="960px">
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
        <Form formType="workInfo"  onClick={handleButtonClick}/>
      </Flex>
      <Box w="600px">
        <Image src={WorkInfoImg} />
      </Box>
    </Flex>
  );
};

export default Work;
