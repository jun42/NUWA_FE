import _ from 'lodash';
import { chekcDuplicateEmail } from '@apis/axios/auth';
import InputErrorBox from './InputErrorBox';
import CustomInput from '../Input/CustomInput';
import { emailPattern } from '@constants/regex';

/**
 *
 * @param {object} register : react-hook-form register객체, ({ ref, onBlur, onChange, name}
 * @param {object} errors : react-hook-form formstate의 errors 객체,
 * @param {boolean} disabled : input disabled
 * @param {boolean} checkDuplicattion : api를 이용한 중복확인 여부
 *
 *
 */
const EmailInput = ({
  register,
  errors,
  disabled = false,
  checkDuplication = false,
}) => {
  return (
    <div>
      <CustomInput
        width={'100%'}
        type="text"
        placeholder="이메일"
        {...register('email', {
          disabled: disabled,
          required: '이메일을 입력해주세요',
          pattern: {
            value: emailPattern,
            message: '유효한 이메일 양식이 아닙니다.',
          },
          validate: {
            isEmailUnique: checkDuplication
              ? _.debounce(async (email) => {
                  const { isValid, errorMessage } = await chekcDuplicateEmail(
                    email
                  );
                  return isValid || errorMessage;
                }, 400)
              : () => {},
          },
        })}
      />
      <InputErrorBox error={errors.email} />
    </div>
  );
};

export default EmailInput;
