import { Box } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import Quill from 'quill';

import Editor from './Editor';

import '@components/TextEditorFunctionalComponent/quill.custom.snow.css';

const CanvasTextEditor = ({ channelId }) => {
  const Delta = Quill.import('delta');
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();

  const quillRef = useRef();
  const defaultValue = new Delta().insert('기본 값');
  return (
    <Box>
      <Editor
        ref={quillRef}
        readOnly={false}
        onSelectionChange={setRange}
        onTextChange={setLastChange}
        defaultValue={defaultValue}
        channelId={channelId}
      />
    </Box>
  );
};

export default CanvasTextEditor;
