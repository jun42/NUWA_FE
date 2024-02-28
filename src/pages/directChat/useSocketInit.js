import { useEffect, useState } from 'react';
// import { Client, Stomp } from '@stomp/stompjs';
import { getToken } from '@chakra-ui/react';
import { Client, Stomp } from '@stomp/stompjs';
// import sockjs from 'sockjs-client/dist/sockjs';
// import * as SockJS from 'sockjs-client';

const useSocketInit = (roomId) => {
  const [stompState, setStompState] = useState();
  const headers = {
    Authorization: getToken(),
    channelType: 'direct',
    channelRoomId: roomId,
  };
  useEffect(() => {
    const sockJs = new SockJS(`${import.meta.env.VITE_SERVER_SOCKJS_SOCKET}`);
    // const sockJs = new SockJS(`${import.meta.env.VITE_SERVER_SOCKET}`);
    // const sockJs = new WebSocket(`${import.meta.env.VITE_SERVER_SOCKET}`);
    const stomp = Stomp.over(sockJs);
    stomp.connect({}, function () {
      console.log('CONSOLE STOMP Connection');
      stomp.subscribe(
        '/sub/chat/' + roomId,
        function (chat) {
          console.log(chat);
          const content = JSON.parse(chat.body);
          const sender = content.sender;
          const message = content.message; // 추가된 부분
          let str;

          // if (sender === userName) {
          //     str = "<div class='col-6'><div class='alert alert-secondary'><b>" + sender + " : " + message + "</b></div></div>";
          // } else {
          //     str = "<div class='col-6'><div class='alert alert-warning'><b>" + sender + " : " + message + "</b></div></div>";
          // }

          const msgArea = document.getElementById('msgArea');
          msgArea.innerHTML += str;
        },
        headers
      );

      // if (type === 'enter') {
      //     stomp.send('/pub/chat/enter', headers, JSON.stringify({
      //         roomId: roomId,
      //         sender: userName
      //     }));
      // }
    });

    return () => {
      stomp.disconnect();
    };
  }, []);
  // useEffect(() => {
  //   const client = new Client({
  //     brokerURL: `${import.meta.env.VITE_SERVER_SOCKET}`,
  //     connectHeaders: headers,
  //     debug: function (str) {
  //       console.log(str);
  //     },
  //     reconnectDelay: 5000,
  //     heartbeatIncoming: 4000,
  //     heartbeatOutgoing: 4000,
  //   });
  //   if (typeof WebSocket !== 'function') {
  //     // For SockJS you need to set a factory that creates a new SockJS instance
  //     // to be used for each (re)connect
  //     client.webSocketFactory = function () {
  //       // Note that the URL is different from the WebSocket URL
  //       return new SockJS(`${import.meta.env.VITE_SERVER_SOCKJS_SOCKET}`);
  //     };
  //   }

  //   client.onConnect = function (frame) {
  //     // Do something, all subscribes must be done is this callback
  //     // This is needed because this will be executed after a (re)connect
  //   };

  //   client.onStompError = function (frame) {
  //     // Will be invoked in case of error encountered at Broker
  //     // Bad login/passcode typically will cause an error
  //     // Complaint brokers will set `message` header with a brief message. Body may contain details.
  //     // Compliant brokers will terminate the connection after any error
  //     console.log('Broker reported error: ' + frame.headers['message']);
  //     console.log('Additional details: ' + frame.body);
  //   };

  //   client.activate();

  //   return () => {
  //     client.deactivate();
  //   };
  // }, []);

  return { stomp: stompState };
};

export default useSocketInit;
