import { InputGroup } from '@chakra-ui/react';
import TextInput from '../../../Input/TextInput';
import FormControl from '../FormControl';
import FormMessage from '../FormMessage';

const UserInfoForm = ({
  userName,
  userJobName,
  userNameValue,
  userJobValue,
  formMessage,
  onChange,
  ...props
}) => {
  const { userName: user_name, userJob: user_job } = formMessage;
  return (
    <InputGroup display="block" mt="40px">
      <FormControl value={userNameValue}>
        <TextInput
          {...props}
          name={userName}
          value={userNameValue}
          onChange={onChange}
        />
        <FormMessage formMessage={user_name} />
      </FormControl>
      <FormControl value={userJobValue} m="20px 0px">
        <TextInput
          {...props}
          name={userJobName}
          value={userJobValue}
          onChange={onChange}
        />
        <FormMessage formMessage={user_job} />
      </FormControl>
    </InputGroup>
  );
};

export default UserInfoForm;
