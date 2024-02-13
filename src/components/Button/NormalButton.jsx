import { Button as ChButton } from '@chakra-ui/react';

const NormalButton = ({ children, ...restProps }) => {
  return <ChButton {...restProps}>{children}</ChButton>;
};

export default NormalButton;
