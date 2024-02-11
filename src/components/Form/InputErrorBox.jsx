import FormErrorMessage from '@components/Text/FormErrorMessage';
import InputSpaceBox from '@components/Box/InputSpaceBox';

const InputErrorBox = ({ error }) => {
  return (
    <>
      {error ? (
        <FormErrorMessage>{error.message}</FormErrorMessage>
      ) : (
        <InputSpaceBox />
      )}
    </>
  );
};

export default InputErrorBox;
