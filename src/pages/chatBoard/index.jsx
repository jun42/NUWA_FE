import { Box, Stack } from '@chakra-ui/layout';
import ChatPageHeader from './ChatPageHeader';
import { Avatar, AvatarBadge } from '@chakra-ui/avatar';
import styled from 'styled-components';

const ChatPage = () => {
  return (
    <StContainer>
      <ChatPageHeader />
      <Stack>
        <Box
          width={'100%'}
          border={'1px'}
          p={'12px'}
          borderColor={'grey.300'}
          rounded={'lg'}
        >
          <Box>
            <Avatar size={'xl'}>
              <AvatarBadge
                boxSize={'1.25rem'}
                bg={'#29cc39'}
                top={'-0.2rem'}
                right={'0.5rem'}
                borderWidth={'2px'}
              />
            </Avatar>
          </Box>
          <Box></Box>
        </Box>
      </Stack>
    </StContainer>
  );
};

export default ChatPage;

const StContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;
