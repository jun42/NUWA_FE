import { Box } from '@chakra-ui/react';
import DirectChatHeader from './DirectChatHeader';
import TextEditor from '../../components/TextEditor/TextEditor';
import MyText from './MyText';
import YourText from './YourText';

const DirectChatPage = () => {
  return (
    <Box width="100%" p={'0.5rem'}>
      <DirectChatHeader />
      <Box height={'70vh'} border={'1px'} overflowY={'scroll'}>
        <YourText />
        <MyText />
      </Box>
      <TextEditor />
    </Box>
  );
};

export default DirectChatPage;
