import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import Span from '@components/Span/Span';
import Calender from '@components/Calendar/Calender';
import OutletSearchBar from '@components/SearchBar/OutletSearchBar';
import CalenderList from './CalenderList';

const CalenderPage = () => {
  return (
    <Box p="50px" w="100%">
      <Span spanText="캘린더" fontSize="30px" fontWeight="600" />
      <OutletSearchBar placeholder="일정을 검색해주세요" />
      <Grid templateColumns="repeat(6, 1fr)" gap={5}>
        <GridItem colSpan={4}>
          <Calender />
        </GridItem>
        <GridItem colStart={5} colEnd={7}>
          <CalenderList />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CalenderPage;
