import { IconButton } from '@chakra-ui/react';

const DirectChatHeaderIcon = ({ icon, ...rest }) => {
  return (
    <IconButton
      bg="white"
      icon={icon}
      _hover={{
        background: 'gray.50',
      }}
      _active={{
        background: 'gray.100',
      }}
      {...rest}
    />
  );
};

export default DirectChatHeaderIcon;
