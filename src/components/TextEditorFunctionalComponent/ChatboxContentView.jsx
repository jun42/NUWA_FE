// import { Delta } from 'quill';
import { Quill } from 'react-quill';
import { memo } from 'react';
import ChatBoxEditor from '../ChatBoxEditor/ChatBoxEditor';

const ChatboxContentView = memo(function ChatboxContentView({
  content,
  isDeleted,
  readOnly,
  updatePublish,
  messageId,
  setReadOnly,
}) {
  const Delta = Quill.import('delta');
  let defaultValue;
  if (isDeleted) {
    defaultValue = new Delta().insert('삭제된 메시지입니다.');
  } else {
    defaultValue = new Delta({ ops: JSON.parse(content) });
  }

  return (
    <>
      <div id="chat"></div>
      <ChatBoxEditor
        readOnly={readOnly === undefined ? true : readOnly}
        defaultValue={defaultValue}
        updatePublish={updatePublish}
        messageId={messageId}
        setReadOnly={setReadOnly}
      />
    </>
  );
});

export default ChatboxContentView;
