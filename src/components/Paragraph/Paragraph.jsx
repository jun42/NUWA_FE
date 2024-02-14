import { Text } from '@chakra-ui/react';

const Paragraph = ({ children, ...props }) => {
  return (
    <Text as="p" {...props}>
      {children}
    </Text>
  );
};

export default Paragraph;
