import SingleColor from '@components/Paragraph/BreakParagraph/SingleColor';
import Image from '@components/Image/Image';
import Paragraph from '@components/Paragraph/Paragraph';
import CopyLink from '@components/CopyLink/CopyLink';
import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react';
import InviteImg from '@assets/invite.png';
import useBoundStore from '@store/store';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createInviteLink } from '@apis/link/createInviteLink';

const InviteMember = () => {
  const { workspace, newWorkSpaceId } = useBoundStore();
  const { workSpaceName } = workspace;
  const navigate = useNavigate();

  const [link, setLink] = useState('');

  useEffect(() => {
    const generateInviteLink = async () => {
      try {
        const response = await createInviteLink(newWorkSpaceId);
        if (response.status === 'success') {
          setLink(response.data.link);
        } else {
          console.error('초대 링크 생성에 실패했습니다:', response.message);
        }
      } catch (error) {
        console.error('초대 링크 생성 과정에서 오류 발생:', error);
      }
    };

    generateInviteLink();
  }, []);
  return (
    <Flex justify={'center'} align={'center'} gap={'100px'}>
      <Flex flexDirection="column">
        <SingleColor
          firstText={workSpaceName}
          subText=" 팀에"
          secondText="초대해보세요."
          hasColor="first"
          fontSize="3xl"
          fontWeight="700"
          spanColor="#575DFB"
          isBreak={true}
        />
        <Paragraph color="#898989" fontWeight="600" mt="80px" mb="16px">
          링크를 전달하여 직장동료를 추가하세요.
        </Paragraph>
        <CopyLink linkAdress={link} />
        <ButtonGroup ml="230px" mt="10px">
          <Button rounded="50px" w="80px">
            이전
          </Button>
          <Button
            rounded="50px"
            w="80px"
            onClick={() => {
              navigate(`/workspace/${newWorkSpaceId}`);
            }}
          >
            다음
          </Button>
        </ButtonGroup>
      </Flex>
      <Box w="400px">
        <Image src={InviteImg} />
      </Box>
    </Flex>
  );
};

export default InviteMember;
