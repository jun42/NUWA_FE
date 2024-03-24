import { useEffect, useState } from 'react';
import { getToken } from '@utils/auth';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { disconnectDirectChatSocket } from '@apis/chat/chat';
import { makeLazyPublish } from './publish';
import { subscribeHandler } from './subscribeHandler';

/**
 *
 * @param {*} roomId  uuid
 * @param {*} workSpaceId number string
 * @param {*} receiverId  number string
 * @param {string} channelType  chat direct voice
 * @returns
 */
const useSocketInit = (roomId, workSpaceId, receiverId, channelType) => {
  const [publish, setPublish] = useState(null);
  const [updatePublish, setUpdatePublish] = useState(null);
  const [deleteSocketMessage, setDeleteSocketMessage] = useState(null);
  const [socketMessageList, setSocketMessageList] = useState([]);
  const [socketMessageDeleteList, setSocketMessageDeleteList] = useState([]);
  const [socketMessageUpdateList, setSocketMessageUpdateList] = useState([]);

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
    if (receiverId) {
      // For SockJS you need to set a factory that creates a new SockJS instance
      // to be used for each (re)connect
      client.webSocketFactory = function () {
        // Note that the URL is different from the WebSocket URL
        return new SockJS(`${import.meta.env.VITE_SERVER_SOCKJS_SOCKET}`);
      };
      client.onConnect = function (frame) {
        console.log('[STOMP ON CONNECT]', frame);
        client.subscribe(
          `/sub/direct/${roomId}`,
          subscribeHandler(
            socketMessageList,
            setSocketMessageList,
            setSocketMessageDeleteList,
            setSocketMessageUpdateList
          ),
          authHeader
        );
        // Do something, all subscribes must be done is this callback
        // This is needed because this will be executed after a (re)connect

        // Enter 메시지 전송
        client.publish({
          destination: `/pub/direct/enter/${roomId}`,
          headers: authHeader,
          body: JSON.stringify({
            roomId,
          }),
        });
        // send 메시지 세팅

        makeLazyPublish(
          authHeader,
          workSpaceId,
          roomId,
          receiverId,
          client,
          setPublish
        );

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

        const updateInfo = {
          destination: '/pub/direct/update',
          headers: authHeader,
          body: {
            id: null,
            workSpaceId,
            roomId,
            content: null,
            messageType: 'UPDATE',
          },
        };
        const lazyUpdate = () => {
          return (id, content, rawString) => {
            const newInfo = { ...updateInfo };
            newInfo.body = JSON.stringify({
              ...newInfo.body,
              id: id,
              content,
              rawString,
            });
            client.publish(newInfo);
          };
        };
        setUpdatePublish((state) => lazyUpdate());
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
    }

    return () => {
      disconnectDirectChatSocket(roomId)
        .then((r) => {
          console.log('[DISCONNECT SOCKET SUCCESS]');
        })
        .catch((err) => {
          console.error('[DISCONNECT SOCKET FAIL]', err);
        });
      client.deactivate();
    };
  }, [roomId]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      disconnectDirectChatSocket(roomId)
        .then((r) => {
          console.log('[DISCONNECT SOCKET SUCCESS]');
        })
        .catch((err) => {
          console.error('[DISCONNECT SOCKET FAIL]', err);
        });
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  return {
    publish,
    updatePublish,
    socketMessageList,
    setSocketMessageList,
    deleteSocketMessage,
    socketMessageDeleteList,
    setSocketMessageDeleteList,
    socketMessageUpdateList,
    setSocketMessageUpdateList,
  };
};

export default useSocketInit;
