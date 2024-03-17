// import { Delta } from 'quill';
import ReactQuill, { Quill } from 'react-quill';
import ChatBoxQuill from './ChatBoxQuill';
import { useRef, useState } from 'react';

const ChatboxContentView = ({ content, isDeleted }) => {
  const Delta = Quill.import('delta');
  // console.log(content, isDeleted);
  let defaultValue;
  if (isDeleted) {
    defaultValue = new Delta().insert('삭제된 메시지입니다.');
  } else {
    defaultValue = new Delta({ ops: JSON.parse(content) });
  }
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
    </>
  );
};

export default ChatboxContentView;
