import { Box } from '@chakra-ui/react';
import Section from '@components/Section/Section';
import Span from '@components/Span/Span';
import Calender from '../../components/Calendar/Calender';
const CalenderPage = () => {
  return (
    <Section>
        <Box mt="50px" ml="54px">
        <Span spanText="캘린더" fontSize="30px" fontWeight="600"/>
        <Calender/>
        </Box>
    </Section>
  )
}

export default CalenderPage