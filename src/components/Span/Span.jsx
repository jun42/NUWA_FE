import { Text } from '@chakra-ui/react';

const Span = ({ spanText, spanColor, ...props }) => {
  return (
    <Text {...props} as="span" color={spanColor}>
      {spanText}
    </Text>
  );
};

export default Span;
