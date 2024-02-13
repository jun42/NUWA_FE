import _ from 'lodash';
import { chekcDuplicateNickname } from '@apis/axios/auth';
import InputErrorBox from './InputErrorBox';
import CustomInput from '../Input/CustomInput';

const NicknameInput = ({ register, errors }) => {
  return (
    <div>
      <CustomInput
        width={'100%'}
        height={'52px'}
        borderRadius={'8px'}
        type="text"
        placeholder="닉네임"
        bg={'white'}
        border={'none'}
        maxLength={30}
        {...register('nickname', {
          required: '닉네임을 입력해주세요',
          validate: {
            isNicknameUnique: _.debounce(async (nickname) => {
              const { isValid, errorMessage } = await chekcDuplicateNickname(
                nickname
              );
              return isValid || errorMessage;
            }, 500),
          },
        })}
      />

      <InputErrorBox error={errors.nickname} />
    </div>
  );
};

export default NicknameInput;
