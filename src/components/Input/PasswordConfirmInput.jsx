import InputErrorBox from '../Form/InputErrorBox';
import CustomInput from './CustomInput';

const PasswordConfirmInput = ({ register, errors, getValues }) => {
  return (
    <div>
      <CustomInput
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

      <InputErrorBox error={errors.passwordConfirm} />
    </div>
  );
};

export default PasswordConfirmInput;
