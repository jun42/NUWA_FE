import { Box, FormErrorMessage, FormHelperText } from '@chakra-ui/react';

const FormMessage = ({ value, formMessage }) => {
  const { error, confirm } = formMessage;
  console.log(value)

  return (
    <Box pl="16px">
      {value !== ''? (
        <FormHelperText>{confirm}</FormHelperText>
      ) : (
        <FormErrorMessage>{error}</FormErrorMessage>
      )}
    </Box>
  );
};

export default FormMessage;
