import UserInfoForm from './type/UserInfoForm';
import WorkInfoForm from './type/WorkInfoForm';
import WorkspaceNameForm from './type/WorkspaceNameForm';

const Form = ({
  formType,
  formMessage,
  name,
  value,
  userNameValue,
  userJobValue,
  onClick,
  onChange,
  ...props
}) => {
  
  const renderFormType = (formType) => {
    switch (formType) {
      case 'workspaceName':
        return (
          <WorkspaceNameForm
            {...props}
            name={name}
            value={value}
            onChange={onChange}
            formMessage={formMessage}
          />
        );
      case 'userInfo':
        return (
          <UserInfoForm
            {...props}
            userJobValue={userJobValue}
            userNameValue={userNameValue}
            onChange={onChange}
            formMessage={formMessage}
          />
        );
      case 'workInfo':
        return (
          <WorkInfoForm
            {...props}
            formMessage={formMessage}
            onClick={onClick}
            onChange={onChange}
            value={value}
          />
        );
      default:
    }
  };
  return <form>{renderFormType(formType)}</form>;
};

export default Form;
