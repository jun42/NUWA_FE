import { Box, FormErrorMessage, FormHelperText } from '@chakra-ui/react';

const FormMessage = ({ value, formMessage }) => {

  const { error, confirm } = formMessage;
  

  return (
    <Box pl="16px">
      {value === ''? (
        <FormErrorMessage>{error}</FormErrorMessage>
        ) : (
        <FormHelperText>{confirm}</FormHelperText>
      )}
    </Box>
  );
};

export default FormMessage;
