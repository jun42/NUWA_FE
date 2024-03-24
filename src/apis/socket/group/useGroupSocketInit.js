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
  const [socketMessageList, setSocketMessageList] = useState([]);

  const [deleteSocketMessage, setDeleteSocketMessage] = useState(null);
  const [socketMessageDeleteList, setSocketMessageDeleteList] = useState([]);

  const [updatePublish, setUpdatePublish] = useState(null);
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
          setSocketMessageDeleteList,
          setSocketMessageUpdateList
        ),
        authHeader
      );
      // send 함수 정의
      makeLazyGroupPublish(authHeader, workSpaceId, roomId, client, setPublish);

      //삭제 함수 정의
      const deleteInfo = {
        destination: '/pub/chat/delete',
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
      //업데이트 함수 정의
      const updateInfo = {
        destination: '/pub/chat/update',
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
  }, [roomId]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      disconnectGroupChatSocket(roomId)
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
    socketMessageList,
    setSocketMessageList,
    deleteSocketMessage,
    socketMessageDeleteList,
    setSocketMessageDeleteList,
    updatePublish,
    socketMessageUpdateList,
    setSocketMessageUpdateList,
  };
};

export default useGroupSocketInit;
