import { InputGroup } from '@chakra-ui/react';
import TextInput from '../../../Input/TextInput';
import FormControl from '../FormControl';
import FormMessage from '../FormMessage';

const UserInfoForm = ({
  userNameValue,
  userJobValue,
  formMessage,
  onChange,
  ...props
}) => {
  const { userName, userJob } = formMessage;

  return (
    <InputGroup display="block" mt="40px">
      <FormControl value={userNameValue}>
        <TextInput
          {...props}
          name="userName"
          value={userNameValue}
          onChange={onChange}
        />
        <FormMessage formMessage={userName} value={userNameValue} />
      </FormControl>
      <FormControl value={userJobValue} m="10px 0px">
        <TextInput
          {...props}
          name="userJob"
          value={userJobValue}
          onChange={onChange}
        />
        <FormMessage formMessage={userJob} value={userJobValue}/>
      </FormControl>
    </InputGroup>
  );
};

export default UserInfoForm;
