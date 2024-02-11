import styled from 'styled-components';
import AtIcon from '@components/Image/AtIcon';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import InputSpaceBox from '@components/Box/InputSpaceBox';
import FormErrorMessage from '@components/Text/FormErrorMessage';
import { login } from '../../apis/axios/auth';

const LoginForm = () => {
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

  const onSubmit = (data) => {
    console.log(data);
    login(data);
  };
  return (
    <StLoginContainer>
      <StForm action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputGroup>
            <InputLeftElement pointerEvents="none" paddingTop={'12px'}>
              <AtIcon />
            </InputLeftElement>
            <Input
              width={'100%'}
              height={'52px'}
              borderRadius={'8px'}
              type="text"
              placeholder="이메일을 입력해주세요"
              bg={'white'}
              border={'none'}
              maxLength={30}
              {...register('email', {
                required: '이메일을 입력해주세요',
                pattern: {
                  value:
                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: '유효한 이메일 양식이 아닙니다.',
                },
              })}
            />
          </InputGroup>
          {errors.email ? (
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          ) : (
            <InputSpaceBox />
          )}
        </div>
        <InputGroup>
          <InputLeftElement pointerEvents="none" paddingTop={'12px'}>
            <AtIcon />
          </InputLeftElement>
          <Input
            width={'100%'}
            height={'52px'}
            borderRadius={'8px'}
            type="password"
            placeholder="비밀번호를 입력해주세요"
            bg={'white'}
            border={'none'}
            maxLength={20}
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
            })}
          />
        </InputGroup>
        <Button
          height={'52px'}
          type="submit"
          colorScheme="secondary"
          onClick={() => {}}
        >
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
  gap: 1rem;
`;
