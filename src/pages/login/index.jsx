import NormalButton from '../../components/Button/NormalButton';
import { Button } from '@chakra-ui/react';
const LoginPage = () => {
  return (
    <div>
      <NormalButton borderRadius={'full'} colorScheme="secondary">
        테스트
      </NormalButton>
      <Button borderRadius={'full'} colorScheme="teal">
        테스트
      </Button>
    </div>
  );
};

export default LoginPage;
