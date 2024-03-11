import { Flex, Box } from '@chakra-ui/react';
import ComponentFavorite from './ComponentFavorite';
import ComponentCalendar from './ComponentCalendar';

const BottomSection = () => {
  return (
    <Flex gap={6} height="100%">
      <Box flex="2.5" height="100%">
        <ComponentFavorite />
      </Box>
      <Box flex="2" height="100%">
        <ComponentCalendar />
      </Box>
    </Flex>
  );
};

export default BottomSection;
