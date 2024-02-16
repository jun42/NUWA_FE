import { Circle, Flex, Text } from '@chakra-ui/react';

const DirectChatHeader = () => {
  return (
    <Flex
      justifyContent={'center'}
      p={'1rem'}
      gap={'0.5rem'}
      alignItems={'center'}
      borderBottom={'1px'}
      borderColor={'grey.300'}
    >
      <Circle size={'10px'} bgColor={'green'} />
      <Text fontSize={'14px'} fontWeight={700}>
        Ina Roverson
      </Text>
    </Flex>
  );
};

export default DirectChatHeader;
