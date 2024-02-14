import { FormControl as CharkFormControl } from '@chakra-ui/react';



const FormControl = ({ children, value, ...props})=> {
  return (
    <CharkFormControl{...props} isInvalid={value ===''}>
      {children}
    </CharkFormControl>
  );
};

export default FormControl;
