import SingleColor from '@components/Paragraph/BreakParagraph/SingleColor';
import Image from '@components/Image/Image';
import Paragraph from '@components/Paragraph/Paragraph';
import CopyLink from '@components/CopyLink/CopyLink';
import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react';
import InviteImg from '@assets/invite.png';

const InviteMember = () => {
  return (
    <Flex justifyContent="space-between" w="920px">
      <Flex flexDirection="column">
        <SingleColor
          firstText="NUWA_Project"
          subText="팀에"
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
        <CopyLink linkAdress="dkkdkdkdkdkkdkdkkdkdkdkdkkdkdkdkdkkdkd" />
        <ButtonGroup ml="230px" mt="10px">
          <Button rounded="50px" w="80px">
            이전
          </Button>
          <Button rounded="50px" w="80px">
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
