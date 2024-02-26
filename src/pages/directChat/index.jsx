import { Box } from '@chakra-ui/react';
import DirectChatHeader from './DirectChatHeader';
// import TextEditor from '@components/TextEditor/TextEditor';
import MyText from './MyText';
import YourText from './YourText';
import TextEditor from '@components/TextEditorFunctionalComponent/TextEditor';
import { useEffect } from 'react';
import sockjs from 'sockjs-client/dist/sockjs';
import { Stomp } from '@stomp/stompjs';
import { request } from '@apis/axios/axios';

const DirectChatPage = () => {
  useEffect(() => {
    // const socket = new sockjs(import.meta.env.VITE_SERVER_SOCKET);
    // const stomp = Stomp.over(socket);
    // return () => {
    //   stomp.disconnect();
    // };
  }, []);
  useEffect(() => {
    request.get('/workspace/1/members');
  }, []);
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
