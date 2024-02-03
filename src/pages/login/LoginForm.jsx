import styled from 'styled-components';
import AtIcon from '@components/Image/AtIcon';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';

const LoginForm = () => {
  return (
    <StLoginContainer>
      <StForm action="">
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
          />
        </InputGroup>
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
          />
        </InputGroup>
        <Button
          height={'52px'}
          type="submit"
          colorScheme="secondary"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Text color={'white'} fontWeight={'700'} py={'14px'}>
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
