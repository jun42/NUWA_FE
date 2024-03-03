import { useRef, useState } from 'react';
import Editor from './Editor';
import Quill from 'quill';
import './quill.custom.snow.css';

const Delta = Quill.import('delta');

const TextEditor = ({ publish }) => {
  // console.log('TEXTEDITOR');
  const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState(false);

  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);

  const quillRef = useRef();
  return (
    <Editor
      publish={publish}
      ref={quillRef}
      readOnly={readOnly}
      onSelectionChange={setRange}
      onTextChange={setLastChange}
      emojiPickerIsOpen={emojiPickerIsOpen}
      setEmojiPickerIsOpen={setEmojiPickerIsOpen}
    />
  );
};

export default TextEditor;
