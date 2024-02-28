import { Box, Button } from '@chakra-ui/react';
import DirectChatHeader from './DirectChatHeader';
// import TextEditor from '@components/TextEditor/TextEditor';
import MyText from './MyText';
import YourText from './YourText';
import TextEditor from '@components/TextEditorFunctionalComponent/TextEditor';
// import sockjs from 'sockjs-client/dist/sockjs';
import { useParams } from 'react-router-dom';
import useSocketInit from './useSocketInit';

const DirectChatPage = () => {
  const { roomId } = useParams;
  const { stomp } = useSocketInit(roomId);
  return (
    <Box width="100%" p={'0.5rem'}>
      <DirectChatHeader />
      <Box height={'70vh'} border={'1px'} overflowY={'scroll'}>
        <YourText />
        <MyText />
      </Box>
      <Button onClick={() => {stomp.send()}} />
      <TextEditor />
    </Box>
  );
};

export default DirectChatPage;
