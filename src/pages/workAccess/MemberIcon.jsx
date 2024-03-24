import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

const MemberIcon = ({ image, number }) => {
  console.log('eeeeeeeeeeeee', image);
  const iconCount = number === 1 ? 0 : Math.min(number, 5) - 1;
  return (
    <Flex justify={'center'} align={'center'} gap={'5px'}>
      <Flex>
        {/* <Box
          width={'17px'}
          height={'17px'}
          border={'1px solid #ccc'}
          borderRadius={'full'}
          backgroundImage={`url(${image})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        /> */}
        <Avatar
          width="17px"
          height="17px"
          border="1px solid #ccc"
          // borderRadius="full"
          marginLeft="-5px"
          // backgroundImage={`url(${image})`}
          // backgroundPosition="center"
          // backgroundRepeat="no-repeat"
          // backgroundSize="cover"
          src={image}
          bg={'secondary.500'}
        />
        {[...Array(iconCount)].map((_, index) => (
          <Avatar
            key={index}
            width="17px"
            height="17px"
            border="1px solid #ccc"
            // borderRadius="full"
            marginLeft="-5px"
            // backgroundImage={`url(${image})`}
            // backgroundPosition="center"
            // backgroundRepeat="no-repeat"
            // backgroundSize="cover"
            src={image}
            bg={'secondary.500'}
          />
        ))}
      </Flex>

      <Text fontSize={'12px'}>{number}명의 멤버</Text>
    </Flex>
  );
};

export default MemberIcon;
