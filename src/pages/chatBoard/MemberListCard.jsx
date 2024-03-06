import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

const MemberListCard = ({ name }) => {
  return (
    <Flex
      _hover={{ bgColor: 'grey.100', cursor: 'pointer' }}
      padding={2}
      rounded={'md'}
    >
      <Flex alignItems={'center'} gap={'24px'}>
        <Avatar size={'md'} />
        <Text fontWeight={700} fontSize={'14px'} color={'#4d5e80'}>
          {name}
        </Text>
      </Flex>
      <Box></Box>
    </Flex>
  );
};

export default MemberListCard;
