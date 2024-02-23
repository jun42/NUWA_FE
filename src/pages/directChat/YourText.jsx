import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

const YourText = ({ sender, sendedTime, text }) => {
  return (
    <Flex width={'100%'} justifyContent={'flex-start'} py="0.75rem" px={'1rem'}>
      <Box height={'100%'} width={'4rem'}>
        <Avatar />
      </Box>
      <Box width={'45%'}>
        <Flex
          height={'3.5rem'}
          justifyContent={'space-between'}
          alignItems={'top'}
        >
          <Text color={'#4D5E80'} fontSize={'16px'} fontWeight={700}>
            Stephen Park
          </Text>
          <Text color={'#ADB8CC'} fontSize={'14px'} fontWeight={700}>
            12:45
          </Text>
        </Flex>
        <Box borderRadius={'10px'} bg={'#f5f7ff'} py={'14px'} px={'30px'}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          ipsa corrupti adipisci ea voluptatum inventore, iste et quisquam
          veritatis officia nesciunt eveniet voluptatem maxime repellat
          doloremque illum numquam sed fugiat asperiores nemo, unde velit modi
          fuga. Enim rem cum nihil!
        </Box>
      </Box>
    </Flex>
  );
};

export default YourText;
