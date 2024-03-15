export const subscribeHandler = (
  socketMessageList,
  setSocketMessageList,
  setSocketMessageDeleteList
) => {
  return (message) => {
    console.log('SUBSCRIBE MESSAGE : ', message.body);
    const bodyObject = JSON.parse(message.body);
    if (bodyObject.messageType === 'ENTER') {
      console.log('Enter sub');
    } else if (bodyObject.messageType === 'DELETE') {
      console.log(bodyObject, socketMessageList);
      setSocketMessageDeleteList((state) => [...state, bodyObject]);
    } else {
      setSocketMessageList((state) => [...state, bodyObject]);
    }
  };
};
