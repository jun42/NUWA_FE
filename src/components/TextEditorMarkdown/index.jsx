import { Textarea } from '@chakra-ui/textarea';
import CustomToolBar from '../TextEditor/CustomToolbar';
import CustomToolBarBottom from '../TextEditor/CustomToolbarBottom';
import { Box } from '@chakra-ui/react';
const MarkdownEditor = () => {
  return (
    <Box>
      <CustomToolBar />
      <Textarea />
      <CustomToolBarBottom />
    </Box>
  );
};

export default MarkdownEditor;
