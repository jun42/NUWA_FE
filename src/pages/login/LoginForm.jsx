import styled from 'styled-components';
import { Button, Text, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { login } from '@apis/axios/auth';
import EmailInput from '@components/Form/EmailInput';
import PasswordInput from '@components/Form/PasswordInput';
import { useNavigate } from 'react-router-dom';
import useBoundStore from '../../store/store';

const LoginForm = () => {
  const { setIsLoggedIn } = useBoundStore();
  const navigate = useNavigate();
  const toast = useToast();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    const { isLoginFailed, message } = await login(data);
    if (isLoginFailed) {
      toast({
        title: '로그인 실패',
        description: message,
        status: 'error',
        duration: 3 * 1000,
        isClosable: true,
        position: 'top',
      });
    } else {
      toast({
        title: '로그인 성공.',
        description: '로그인에 성공했습니다.',
        status: 'success',
        duration: 3 * 1000,
        isClosable: true,
        position: 'top',
      });
      setIsLoggedIn(true);
      navigate('/');
    }
  };
  return (
    <StLoginContainer>
      <StForm action="" onSubmit={handleSubmit(onSubmit)}>
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <Button height={'52px'} type="submit" colorScheme="secondary">
          <Text
            color={'white'}
            fontSize={'18px'}
            fontWeight={'700'}
            py={'14px'}
          >
            로그인
          </Text>
        </Button>
      </StForm>
    </StLoginContainer>
  );
};

export default LoginForm;

const StLoginContainer = styled.div`
  width: 100%;
`;

const StForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
