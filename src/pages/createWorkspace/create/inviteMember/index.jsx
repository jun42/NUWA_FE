import SingleColor from '@components/Paragraph/BreakParagraph/SingleColor';
import Image from '@components/Image/Image';
import Paragraph from '@components/Paragraph/Paragraph';
import CopyLink from '@components/CopyLink/CopyLink';
import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react';
import InviteImg from '@assets/invite.png';
import useBoundStore from '@store/store';
import { Link, useLocation } from 'react-router-dom';

const InviteMember = () => {
  const { workspace } = useBoundStore();
  const location = useLocation();
  console.log(location.state.workspaceUrl);
  const { workSpaceName } = workspace;
  return (
    <Flex justifyContent="space-between" w="920px">
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
        <CopyLink
          linkAdress={`http://localhost:3000/workspace/${location.state.workspaceUrl}`}
        />
        <ButtonGroup ml="260px" mt="10px">
          <Link
            to={`http://localhost:3000/workspace/${location.state.workspaceUrl}`}
          >
            <Button rounded="50px">워크페이스로 이동</Button>
          </Link>
        </ButtonGroup>
      </Flex>
      <Box w="400px">
        <Image src={InviteImg} />
      </Box>
    </Flex>
  );
};

export default InviteMember;
