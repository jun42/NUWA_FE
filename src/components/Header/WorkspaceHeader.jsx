import { Box } from '@chakra-ui/layout';
import LogoWhite from '@components/Image/LogoWhite';

const WorkspaceHeader = () => {
  return (
    <Box
      width={'100%'}
      height={'55px'}
      bgColor={'grey.700'}
      py={'15px'}
      px={'32px'}
    >
      <LogoWhite width={'95px'} height={'25px'} />
    </Box>
  );
};

export default WorkspaceHeader;
