import { Text } from '@chakra-ui/react';

const FormErrorMessage = ({ children }) => {
  return (
    <div>
      <Text fontSize={'14px'} color={'red'} pl={'10px'}>
        {children}
      </Text>
    </div>
  );
};

export default FormErrorMessage;
