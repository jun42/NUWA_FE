import { Box, Circle, Text } from '@chakra-ui/react';
import ChatPreviewMain from './ChatPreviewMain';
import { useWorkspaceUserProfileQuery } from '@queries/workspaceProfile';
import { useParams } from 'react-router-dom';
import useBoundStore from '@store/store';

const ChatPreviewBox = ({
  messageCreatedAt,
  lastMessage,
  unReadCount,
  roomId,
  joinMemberName,
  joinMemberId,
  createMemberName,
  createMemberId,
}) => {
  const { workSpaceId } = useParams();
  const setReceiverId = useBoundStore((state) => state.setReceiverId);

  const { data: currentUserWorkspaceProfile, isLoading } =
    useWorkspaceUserProfileQuery(workSpaceId);

  const conversationPartner =
    currentUserWorkspaceProfile.id === joinMemberId
      ? createMemberName
      : joinMemberName;
  return (
    <>
      {!isLoading && (
        <Box
          width={'100%'}
          border={'1px'}
          p={'12px'}
          borderColor={'grey.300'}
          rounded={'lg'}
          display={'flex'}
          gap={'1rem'}
          justifyContent={'space-between'}
        >
          <ChatPreviewMain
            lastMessage={lastMessage}
            conversationPartner={conversationPartner}
          />
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'flex-end'}
            justifyContent={'space-between'}
          >
            <Text color={'#ADB8CC'} fontSize={'14px'} fontWeight={700}>
              {messageCreatedAt}
            </Text>
            {unReadCount > 0 && (
              <Circle
                bg={'red'}
                size={'20px'}
                color={'white'}
                fontSize={'10px'}
                textAlign={'center'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                {unReadCount <= 50 ? unReadCount : '50+'}
              </Circle>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default ChatPreviewBox;
