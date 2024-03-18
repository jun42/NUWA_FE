import { useEffect, useState } from 'react';
import { getToken } from '@utils/auth';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { makeLazyGroupPublish } from '../publish';
import { subscribeHandler } from '../subscribeHandler';
import { disconnectGroupChatSocket } from '@apis/chat/groupChat';

/**
 *
 * @param {*} roomId  uuid
 * @param {*} workSpaceId number string
 * @param {*} receiverId  number string
 * @param {string} channelType  chat direct voice
 * @returns
 */
const useGroupSocketInit = (roomId, workSpaceId, channelType) => {
  const [publish, setPublish] = useState(null);
  const [deleteSocketMessage, setDeleteSocketMessage] = useState(null);
  const [socketMessageList, setSocketMessageList] = useState([]);
  const [socketMessageDeleteList, setSocketMessageDeleteList] = useState([]);
  const [socketMessagePatchList, setSocketMessagePatchList] = useState([]);

  const authHeader = {
    Authorization: getToken(),
  };
  // console.log('AUTHHEADER', authHeader);
  const headers = {
    ...authHeader,
    channelType: channelType,
    channelRoomId: roomId,
    workSpaceId,
  };

  useEffect(() => {
    const client = new Client({
      // brokerURL: `${import.meta.env.VITE_SERVER_SOCKJS_SOCKET}`,
      connectHeaders: headers,
      debug: function (str) {
        console.log('[STOMP DEBUGGING]', str);
      },
      reconnectDelay: 15000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });
    //리시버 아이디를 받은 후에 연결 진행
    // For SockJS you need to set a factory that creates a new SockJS instance
    // to be used for each (re)connect
    client.webSocketFactory = function () {
      // Note that the URL is different from the WebSocket URL
      return new SockJS(`${import.meta.env.VITE_SERVER_SOCKJS_SOCKET}`);
    };
    client.onConnect = function (frame) {
      console.log('[STOMP ON CONNECT]', frame);
      client.subscribe(
        `/sub/chat/${roomId}`,
        subscribeHandler(
          socketMessageList,
          setSocketMessageList,
          setSocketMessageDeleteList
        ),
        authHeader
      );
      // Do something, all subscribes must be done is this callback
      // This is needed because this will be executed after a (re)connect

      // Enter 메시지 전송
      // client.publish({
      //   destination: `/pub/direct/enter/${roomId}`,
      //   headers: authHeader,
      //   body: JSON.stringify({
      //     roomId,
      //   }),
      // });
      // send 메시지 세팅

      makeLazyGroupPublish(authHeader, workSpaceId, roomId, client, setPublish);

      // 이미지나 파일은 삭제만
      const deleteInfo = {
        destination: '/pub/direct/delete',
        headers: authHeader,
        body: {
          id: null,
          workSpaceId,
          roomId,
          messageType: 'DELETE',
        },
      };
      const lazyDelete = () => {
        return (id) => {
          const newInfo = { ...deleteInfo };
          newInfo.body = JSON.stringify({
            ...newInfo.body,
            id: id,
          });
          client.publish(newInfo);
        };
      };
      setDeleteSocketMessage((state) => lazyDelete());
    };

    client.onStompError = function (frame) {
      // Will be invoked in case of error encountered at Broker
      // Bad login/passcode typically will cause an error
      // Complaint brokers will set `message` header with a brief message. Body may contain details.
      // Compliant brokers will terminate the connection after any error
      console.log('Broker reported error: ' + frame.headers['message']);
      console.log('Additional details: ' + frame.body);
    };

    client.activate();

    return () => {
      disconnectGroupChatSocket(roomId)
        .then((r) => {
          console.log('[DISCONNECT SOCKET SUCCESS]');
        })
        .catch((err) => {
          console.error('[DISCONNECT SOCKET FAIL]');
        });
      client.deactivate();
    };
  }, []);

  return {
    publish,
    socketMessageList,
    setSocketMessageList,
    deleteSocketMessage,
    socketMessageDeleteList,
    setSocketMessageDeleteList,
  };
};

export default useGroupSocketInit;

// useEffect(() => {
// const sockJs = new SockJS(`${import.meta.env.VITE_SERVER_SOCKJS_SOCKET}`);
// const sockJs = new SockJS(`${import.meta.env.VITE_SERVER_SOCKET}`);
// const sockJs = new WebSocket(`${import.meta.env.VITE_SERVER_SOCKET}`);
// const stomp = Stomp.over(sockJs);
// stomp.connect({}, function () {
//   console.log('CONSOLE STOMP Connection');
//   stomp.subscribe(
//     '/sub/chat/' + roomId,
//     function (chat) {
//       console.log(chat);
//       const content = JSON.parse(chat.body);
//       const sender = content.sender;
//       const message = content.message; // 추가된 부분
//       let str;
// if (sender === userName) {
//     str = "<div class='col-6'><div class='alert alert-secondary'><b>" + sender + " : " + message + "</b></div></div>";
// } else {
//     str = "<div class='col-6'><div class='alert alert-warning'><b>" + sender + " : " + message + "</b></div></div>";
// }
//     const msgArea = document.getElementById('msgArea');
//     msgArea.innerHTML += str;
//   },
//   headers
// );
// if (type === 'enter') {
//     stomp.send('/pub/chat/enter', headers, JSON.stringify({
//         roomId: roomId,
//         sender: userName
//     }));
// }
// });

//   return () => {
//     stomp.disconnect();
//   };
// }, []);
