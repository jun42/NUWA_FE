import { useRef, useState } from 'react';
import Editor from './Editor';
import Quill from 'quill';
import './quill.custom.snow.css';

const Delta = Quill.import('delta');

const TextEditor = () => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);

  const quillRef = useRef();
  return (
    <Editor
      ref={quillRef}
      readOnly={readOnly}
      onSelectionChange={setRange}
      onTextChange={setLastChange}
    />
  );
};

export default TextEditor;
