import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import AtIcon from '@components/Image/AtIcon';
import FormErrorMessage from '@components/Text/FormErrorMessage';
import InputSpaceBox from '@components/Box/InputSpaceBox';

const PasswordConfirmInput = ({ register, errors, getValues }) => {
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
          placeholder="비밀번호 재입력"
          bg={'white'}
          border={'none'}
          maxLength={20}
          {...register('passwordConfirm', {
            required: '비밀번호를 다시 한 번 입력해 주세요.',
            validate: {
              isSameWithPassword: (input) => {
                if (input !== getValues('password'))
                  return '비밀번호가 서로 다릅니다.';
              },
            },
          })}
        />
      </InputGroup>
      {errors.passwordConfirm ? (
        <FormErrorMessage>{errors.passwordConfirm?.message}</FormErrorMessage>
      ) : (
        <InputSpaceBox />
      )}
    </div>
  );
};

export default PasswordConfirmInput;
