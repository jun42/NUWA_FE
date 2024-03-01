import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import CustomToolBar from './CustomToolbar';
import CustomToolbarBottom from './CustomToolbarBottom';
import ReactQuill from 'react-quill';
import './TextEditor.css';
import 'react-quill/dist/quill.snow.css';

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

  const handleKeydown = (e) => {
    if (e.key === 'Enter') {
      console.log(this);
    }
  };

  // const clearText = () => {
  //   this.quill.deleteText(0, this.quill.getLength());
  // };

  return (
    <Box height={'15vh'} width={width}>
      <CustomToolBar />
      <ReactQuill
        onChange={handleChange}
        modules={modules}
        formats={formats}
        onKeyDown={handleKeydown}
      />
      <CustomToolbarBottom />
    </Box>
  );
};

export default TextEditor;
