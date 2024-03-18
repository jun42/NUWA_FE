export const subscribeHandler = (
  socketMessageList,
  setSocketMessageList,
  setSocketMessageDeleteList,
  setSocketMessageUpdateList
) => {
  return (message) => {
    console.log('SUBSCRIBE MESSAGE : ', message.body);
    const bodyObject = JSON.parse(message.body);
    if (bodyObject.messageType === 'ENTER') {
      console.log('Enter sub');
    } else if (bodyObject.messageType === 'DELETE') {
      setSocketMessageDeleteList((state) => [...state, bodyObject]);
    } else if (bodyObject.messageType === 'UPDATE') {
      setSocketMessageUpdateList((state) => [...state, bodyObject]);
    } else {
      setSocketMessageList((state) => [...state, bodyObject]);
    }
  };
};
