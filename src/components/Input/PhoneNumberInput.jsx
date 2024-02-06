import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import AtIcon from '@components/Image/AtIcon';
import FormErrorMessage from '@components/Text/FormErrorMessage';
import { Controller } from 'react-hook-form';
import InputSpaceBox from '@components/Box/InputSpaceBox';

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
            <InputGroup>
              <InputLeftElement pointerEvents="none" paddingTop={'12px'}>
                <AtIcon />
              </InputLeftElement>
              <Input
                width={'100%'}
                height={'52px'}
                borderRadius={'8px'}
                type="text"
                placeholder="전화번호"
                bg={'white'}
                border={'none'}
                maxLength={13}
                {...field} // onBlur value onChange
                // {...register('phoneNumber', {
                //   required: '전화번호를 입력해주세요.',
                // })}
                onChange={(e) => {
                  field.onChange(phoneNumberMask(e.target.value));
                }}
              />
            </InputGroup>
          );
        }}
      />
      {errors.phoneNumber ? (
        <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
      ) : (
        <InputSpaceBox />
      )}
    </div>
  );
};

export default PhoneNumberInput;

// const phoneNumberMask = (value) => {
//   return (
//     value
//       .replace(/-/g, '')
//       .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
//       .substr(0, 13) || ''
//   );
// };

const phoneNumberMask = (value) => {
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
