import UserInfoForm from './type/UserInfoForm';
import WorkInfoForm from './type/WorkInfoForm';
import WorkspaceNameForm from './type/WorkspaceNameForm';

const Form = ({
  formType,
  formMessage,
  name,
  value,
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
        return <UserInfoForm {...props} formMessage={formMessage} />;
      case 'workInfo':
        return (
          <WorkInfoForm
            {...props}
            formMessage={formMessage}
            onClick={onClick}
          />
        );
      default:
    }
  };
  return <form>{renderFormType(formType)}</form>;
};

export default Form;
