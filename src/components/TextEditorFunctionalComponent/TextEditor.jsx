import { useRef, useState } from 'react';
import Editor from './Editor';
import './quill.custom.snow.css';

const TextEditor = ({ publish }) => {
  // console.log('TEXTEDITOR');
  const [emojiPickerIsOpen, setEmojiPickerIsOpen] = useState(false);

  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();

  const quillRef = useRef();
  return (
    <Editor
      publish={publish}
      ref={quillRef}
      readOnly={false}
      onSelectionChange={setRange}
      onTextChange={setLastChange}
      emojiPickerIsOpen={emojiPickerIsOpen}
      setEmojiPickerIsOpen={setEmojiPickerIsOpen}
    />
  );
};

export default TextEditor;
