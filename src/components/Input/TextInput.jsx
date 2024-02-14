import { Input } from '@chakra-ui/react';

const TextInput = ({ name,value, onChange,placeholder, ...props })=> {
  return (
    <Input
      {...props}
      type="text"
      name={name}
      defaultValue={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
