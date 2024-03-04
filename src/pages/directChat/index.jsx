import { Box, Button } from '@chakra-ui/react';
import DirectChatHeader from './DirectChatHeader';
// import TextEditor from '@components/TextEditor/TextEditor';
import MyText from './MyText';
import YourText from './YourText';
import TextEditor from '@components/TextEditorFunctionalComponent/TextEditor';
// import sockjs from 'sockjs-client/dist/sockjs';
import { useParams } from 'react-router-dom';
import useSocketInit from './useSocketInit';
import { useGetWorkspaceProfileQuery } from '../../queries/workspaceProfile';
import { useEffect, useState } from 'react';
import { getDirectChatMessageList } from '../../apis/chat/chat';

const DirectChatPage = () => {
  const { roomId, workSpaceId } = useParams();

  const { data, isLoading } = useGetWorkspaceProfileQuery(workSpaceId);
  const publish = useSocketInit(roomId, data?.id, workSpaceId);

  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    getDirectChatMessageList(roomId).then(console.log);
  });
  console.log('INDEX publish', publish);
  return (
    <Box width="100%" p={'0.5rem'}>
      {!isLoading && (
        <>
          <DirectChatHeader />
          <Box maxH={'70vh'} border={'1px'} overflowY={'scroll'}>
            <YourText />
            <MyText />
          </Box>
          <TextEditor publish={publish} />
        </>
      )}
    </Box>
  );
};

export default DirectChatPage;
