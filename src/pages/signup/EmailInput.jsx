import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import AtIcon from '@components/Image/AtIcon';
import FormErrorMessage from '@components/Text/FormErrorMessage';
import _ from 'lodash';
import { chekcDuplicateEmail } from '@apis/axios/auth';
import InputSpaceBox from '@components/Box/InputSpaceBox';

const EmailInput = ({ register, errors }) => {
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
          type="text"
          placeholder="이메일"
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
            validate: {
              isEmailUnique: _.debounce(async (email) => {
                const { isValid, errorMessage } = await chekcDuplicateEmail(
                  email
                );
                return isValid || errorMessage;
              }, 400),
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
  );
};

export default EmailInput;
