import { Controller } from 'react-hook-form';
import InputErrorBox from './InputErrorBox';
import CustomInput from '../Input/CustomInput';

const PhoneNumberInput = ({ control, errors }) => {
  return (
    <div>
      <Controller
        control={control}
        name="phoneNumber"
        rules={{
          required: '전화번호를 입력해주세요',
          validate: {
            isNumberLengthEnough: (input) => {
              let isValid, errorMessage;
              if (input.length === 13) {
                isValid = true;
                errorMessage = '자릿수가 일치합니다.';
              } else {
                isValid = false;
                errorMessage =
                  '전화번호를 다시 한 번 확인해주세요. 길이가 짧습니다.';
              }
              return isValid || errorMessage;
            },
          },
        }}
        render={({ field }) => {
          return (
            <CustomInput
              width={'100%'}
              height={'52px'}
              borderRadius={'8px'}
              type="text"
              placeholder="전화번호"
              bg={'white'}
              border={'none'}
              maxLength={13}
              {...field} // onBlur value onChange
              onChange={(e) => {
                field.onChange(phoneNumberMask(e.target.value));
              }}
            />
          );
        }}
      />
      <InputErrorBox error={errors.phoneNumber} />
    </div>
  );
};

export default PhoneNumberInput;

export const phoneNumberMask = (value) => {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 3) {
    return digits;
  } else if (digits.length <= 7) {
    return digits.slice(0, 3) + '-' + digits.slice(3);
  } else {
    const answer =
      digits.slice(0, 3) + '-' + digits.slice(3, 7) + '-' + digits.slice(7);
    return answer.substring(0, 13);
  }
};
