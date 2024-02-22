import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import CustomToolBar from './CustomToolbar';
import CustomToolbarBottom from './CustomToolbarBottom';
import ReactQuill from 'react-quill';
import './TextEditor.css';

const TextEditor = ({ width = '100%' }) => {
  const [value, setValue] = useState({ editorHtml: '' });

  const modules = {
    toolbar: {
      container: '#toolbar',
    },
  };
  const formats = ['bold', 'italic', 'strike', 'link'];
  const handleChange = (html) => {
    setValue({ editorHtml: html });
    console.log(value);
  };

  return (
    <Box height={'15vh'} width={width}>
      <CustomToolBar />
      <ReactQuill onChange={handleChange} modules={modules} formats={formats} />
      <CustomToolbarBottom />
    </Box>
  );
};

export default TextEditor;
