import { Box, Flex } from '@chakra-ui/react';

const MyText = ({ text }) => {
  return (
    <Flex width={'100%'} justifyContent={'flex-end'} py="0.5rem" px={'1rem'}>
      <Box
        borderRadius={'10px'}
        width={'45%'}
        bg={'primary.100'}
        py={'14px'}
        px={'30px'}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsa
        corrupti adipisci ea voluptatum inventore, iste et quisquam veritatis
        officia nesciunt eveniet voluptatem maxime repellat doloremque illum
        numquam sed fugiat asperiores nemo, unde velit modi fuga. Enim rem cum
        nihil!
      </Box>
    </Flex>
  );
};

export default MyText;
