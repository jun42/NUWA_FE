import { passwordPattern } from '../../constants/regex';
import InputErrorBox from '../Form/InputErrorBox';
import CustomInput from './CustomInput';

const PasswordInput = ({ register, errors }) => {
  return (
    <div>
      <CustomInput
        width={'100%'}
        placeholder={'비밀번호 8자리 이상'}
        type="password"
        {...register('password', {
          required: '비밀번호를 입력해주세요.',
          pattern: {
            value: passwordPattern,
            message: '8자리 이상의 알파벳과 숫자를 조합해주세요.',
          },
        })}
      />
      <InputErrorBox error={errors.password} />
    </div>
  );
};

export default PasswordInput;

{
  /* <InputGroup>
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
      </InputGroup> */
}
