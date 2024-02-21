import { Box } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import CustomToolBar from './CustomToolbar';
import CustomToolbarBottom from './CustomToolbarBottom';
import ReactQuill from 'react-quill';

const TextEditor = ({ width = '100%' }) => {
  const [value, setValue] = useState({ editorHtml: '' });

  const modules = {
    toolbar: {
      container: '#toolbar',
    },
  };
  const formats = ['bold', 'italic', 'strike'];
  const handleChange = (html) => {
    setValue({ editorHtml: html });
  };

  return (
    <Box border={'1px'} height={'15vh'} width={width}>
      <div>
        <i>hi</i>
      </div>
      <CustomToolBar />
      <ReactQuill onChange={handleChange} modules={modules} formats={formats} />
      <CustomToolbarBottom />
    </Box>
  );
};

export default TextEditor;
