import TextInput from '@components/Input/TextInput';
import FormControl from '../FormControl';
// import FormMessage from '../FormMessage';
import { Box, Button, ButtonGroup } from '@chakra-ui/react';

const WorkInfoForm = ({onClick}) => {
  return (
    <Box>
      <FormControl>
        <TextInput
          w="280px"
          mr=" 12px"
          rounded="50px"
          name="workspaceName"
          border="2px"
          borderColor="#8989897a"
        />
        {/* <FormMessage /> */}
      </FormControl>
      <ButtonGroup mt="16px" ml="110px">
        <Button rounded="50px" w="80px" name="prev" onClick={onClick}>
          이전
        </Button>
        <Button rounded="50px" w="80px" name="next" onClick={onClick}>
          다음
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default WorkInfoForm;
