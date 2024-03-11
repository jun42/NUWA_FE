// import { Delta } from 'quill';
import ReactQuill, { Quill } from 'react-quill';
import ChatBoxQuill from './ChatBoxQuill';
import { useRef, useState } from 'react';

const ChatboxContentView = ({ content }) => {
  const Delta = Quill.import('delta');
  const defaultValue = new Delta({ ops: JSON.parse(content) });

  const quillRef = useRef();
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();

  return (
    <>
      <div id="chat"></div>
      <ReactQuill
        readOnly={true}
        defaultValue={defaultValue}
        modules={{ toolbar: '#chat' }}
        theme={false}
      />
      {/* <ChatBoxQuill
        ref={quillRef}
        readOnly={true}
        defaultValue={defaultValue}
        onSelectionChange={setRange}
        onTextChange={setLastChange}
      /> */}
    </>
  );
};

export default ChatboxContentView;
