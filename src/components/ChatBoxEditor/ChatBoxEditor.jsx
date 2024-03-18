import { useRef, useState } from 'react';
import Editor from './Editor';

const ChatBoxEditor = ({
  readOnly,
  defaultValue,
  updatePublish,
  messageId,
  setReadOnly,
}) => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();

  // Use a ref to access the quill instance directly
  const quillRef = useRef();
  return (
    <Editor
      ref={quillRef}
      readOnly={readOnly}
      defaultValue={defaultValue}
      onSelectionChange={setRange}
      onTextChange={setLastChange}
      updatePublish={updatePublish}
      messageId={messageId}
      setReadOnly={setReadOnly}
    />
  );
};

export default ChatBoxEditor;
