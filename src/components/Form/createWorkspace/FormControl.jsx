import { FormControl as CharkFormControl } from '@chakra-ui/react';



const FormControl = ({ children, value})=> {
  return (
    <CharkFormControl isInvalid={value ===''}>
      {children}
    </CharkFormControl>
  );
};

export default FormControl;
