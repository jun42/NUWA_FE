import { Circle, Flex, IconButton, Text } from '@chakra-ui/react';
import { MdLocalPhone } from 'react-icons/md';
import { MdVideocam } from 'react-icons/md';
import { BsArrowsAngleExpand } from 'react-icons/bs';

import { RxDotsVertical } from 'react-icons/rx';

const DirectChatHeader = ({ receiverName }) => {
  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      borderBottom={'1px'}
      borderColor={'grey.300'}
      padding={'0.5rem'}
    >
      <Flex gap={'1rem'}>
        <DirectChatHeaderIcon
          icon={<MdLocalPhone color="#C3CAD9" size={'1.25rem'} />}
        />
        <DirectChatHeaderIcon
          icon={<MdVideocam color="#C3CAD9" size={'1.25rem'} />}
        />
      </Flex>

      <Flex gap={'0.5rem'} alignItems={'center'}>
        <Circle size={'10px'} bgColor={'green'} />
        <Text fontSize={'14px'} fontWeight={700}>
          {receiverName}
        </Text>
      </Flex>
      <Flex gap={'1rem'}>
        <DirectChatHeaderIcon
          icon={<BsArrowsAngleExpand color="#C3CAD9" size={'1.25rem'} />}
        />
        <DirectChatHeaderIcon
          icon={<RxDotsVertical color="#C3CAD9" size={'1.25rem'} />}
        />
      </Flex>
    </Flex>
  );
};

export default DirectChatHeader;

const DirectChatHeaderIcon = ({ icon, ...rest }) => {
  return (
    <IconButton
      bg="white"
      icon={icon}
      _hover={{
        background: 'grey.100',
      }}
      {...rest}
    />
  );
};
