import { Box, Flex, Text } from '@chakra-ui/react';

const MemberIcon = ({ image, number }) => {
  const iconCount = Math.min(number, 5);
  return (
    <Flex justify={'center'} align={'center'} gap={'5px'}>
      <Flex>
        <Box
          width={'17px'}
          height={'17px'}
          border={'1px solid #ccc'}
          borderRadius={'full'}
          backgroundImage={`url(${image})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
        {[...Array(iconCount)].map((_, index) => (
          <Box
            key={index}
            width="17px"
            height="17px"
            border="1px solid #ccc"
            borderRadius="full"
            marginLeft="-5px"
            backgroundImage={`url(${image})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          />
        ))}
      </Flex>

      <Text fontSize={'12px'}>{number}명의 멤버</Text>
    </Flex>
  );
};

export default MemberIcon;
