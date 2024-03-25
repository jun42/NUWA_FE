import { Avatar, AvatarBadge, Box } from '@chakra-ui/react';

const ChatPreviewAvatar = ({ conversationPartner, image }) => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Avatar size={'lg'} name={conversationPartner} src={image}>
        <AvatarBadge
          boxSize={'1rem'}
          bg={'#29cc39'}
          top={'-0.2rem'}
          right={'0.5rem'}
          borderWidth={'2px'}
        />
      </Avatar>
    </Box>
  );
};

export default ChatPreviewAvatar;
