import { Box, FormErrorMessage, FormHelperText } from '@chakra-ui/react';

const FormMessage = ({ value, formMessage }) => {
  const { error, confirm } = formMessage;

  return (
    <Box pl="16px">
      {value!== undefined? (
        <FormHelperText>{confirm}</FormHelperText>
      ) : (
        <FormErrorMessage>{error}</FormErrorMessage>
      )}
    </Box>
  );
};

export default FormMessage;
