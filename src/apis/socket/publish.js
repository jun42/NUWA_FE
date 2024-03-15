export const makeLazyPublish = (
  authHeader,
  workSpaceId,
  roomId,
  receiverId,
  client,
  setPublish
) => {
  const publishInfo = {
    destination: '/pub/direct/send',
    headers: authHeader,
    body: {
      workSpaceId: workSpaceId,
      roomId: roomId,
      receiverId: receiverId,
      content: '',
      messageType: '',
      rawString: '',
    },
  };

  const lazyPublish = () => {
    return (content, messageType = 'TEXT', rawString) => {
      const newInfo = { ...publishInfo };
      newInfo.body = JSON.stringify({
        ...newInfo.body,
        content: content,
        messageType: messageType,
        rawString: rawString,
      });
      // console.log('INFO', newInfo);
      client.publish(newInfo);
    };
  };

  setPublish((state) => lazyPublish());
  console.log('SET PUBLISH');
};

export const makeLazyGroupPublish = (
  authHeader,
  workSpaceId,
  roomId,
  client,
  setPublish
) => {
  const publishInfo = {
    destination: '/pub/chat/send',
    headers: authHeader,
    body: {
      workSpaceId: workSpaceId,
      roomId: roomId,
      content: '',
      messageType: '',
      rawString: '',
    },
  };

  const lazyPublish = () => {
    return (content, messageType = 'TEXT', rawString) => {
      const newInfo = { ...publishInfo };
      newInfo.body = JSON.stringify({
        ...newInfo.body,
        content: content,
        messageType: messageType,
        rawString: rawString,
      });
      // console.log('INFO', newInfo);
      client.publish(newInfo);
    };
  };

  setPublish((state) => lazyPublish());
  console.log('SET PUBLISH');
};
