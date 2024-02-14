import UserInfoForm from './type/UserInfoForm';
import WorkspaceNameForm from './type/WorkspaceNameForm';

const Form = ({ formType,formMessage, name, value, onChange, ...props }) => {
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
        return <UserInfoForm {...props}  formMessage={formMessage}/>;
    }
  };
  return <form>{renderFormType(formType)}</form>;
};

export default Form;
