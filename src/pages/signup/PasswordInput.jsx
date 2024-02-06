import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import AtIcon from '@components/Image/AtIcon';
import FormErrorMessage from '@components/Text/FormErrorMessage';
import InputSpaceBox from '@components/Box/InputSpaceBox';

const PasswordInput = ({ register, errors }) => {
  return (
    <div>
      <InputGroup>
        <InputLeftElement pointerEvents="none" paddingTop={'12px'}>
          <AtIcon />
        </InputLeftElement>
        <Input
          width={'100%'}
          height={'52px'}
          borderRadius={'8px'}
          type="password"
          placeholder="비밀번호 8자리 이상"
          bg={'white'}
          border={'none'}
          maxLength={20}
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: '8자리 이상의 알파벳과 숫자를 조합해주세요.',
            },
          })}
        />
      </InputGroup>
      {errors.password ? (
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      ) : (
        <InputSpaceBox />
      )}
    </div>
  );
};

export default PasswordInput;
