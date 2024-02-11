import _ from 'lodash';
import { chekcDuplicateEmail } from '@apis/axios/auth';
import InputErrorBox from '../Form/InputErrorBox';
import CustomInput from './CustomInput';
import { emailPattern } from '@constants/regex';

const EmailInput = ({ register, errors, disabled }) => {
  return (
    <div>
      <CustomInput
        width={'100%'}
        type="text"
        placeholder="이메일"
        {...register('email', {
          disabled: disabled === undefined ? false : true,
          required: '이메일을 입력해주세요',
          pattern: {
            value: emailPattern,
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
      <InputErrorBox error={errors.email} />
    </div>
  );
};

export default EmailInput;
