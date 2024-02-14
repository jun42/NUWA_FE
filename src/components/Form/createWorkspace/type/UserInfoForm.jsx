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
    <>
      <FormControl value={userNameValue}>
        <TextInput
          {...props}
          name={userName}
          value={userNameValue}
          onChange={onChange}
        />
        <FormMessage formMessage={user_name} />
      </FormControl>
      <FormControl value={userJobValue}>
        <TextInput
          {...props}
          name={userJobName}
          value={userJobValue}
          onChange={onChange}
        />
        <FormMessage formMessage={user_job} />
      </FormControl>
    </>
  );
};

export default UserInfoForm;
