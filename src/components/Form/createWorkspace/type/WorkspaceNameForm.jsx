import TextInput from '@components/Input/TextInput';
import FormControl from '../FormControl';
import FormMessage from '../FormMessage';

const WorkspaceNameForm = ({ name, value, onChange,formMessage, ...props }) => {
  console.log(value)
  return (
    <FormControl value={value}>
      <TextInput {...props} name={name} value={value} onChange={onChange} />
      <FormMessage formMessage={formMessage} value={value}/>
    </FormControl>
  );
};
export default WorkspaceNameForm;
