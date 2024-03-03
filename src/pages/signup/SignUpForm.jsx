import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import NicknameInput from '@components/Form/NicknameInput';
import EmailInput from '@components/Form/EmailInput';
import PasswordInput from '@components/Form/PasswordInput';
import PasswordConfirmInput from '@components/Form/PasswordConfirmInput';
import PhoneNumberInput from '@components/Form/PhoneNumberInput';
import { createAccount } from '@apis/auth/auth';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '@components/Button/SubmitButton';

const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid, isDirty, isSubmitting, isSubmitted },
    handleSubmit,
    getValues,
    control,
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
      passwordConfirm: '',
      phoneNumber: '',
    },
  });

  const onSubmit = async (data) => {
    const newData = {
      nickname: data.nickname,
      email: data.email,
      password: data.password,
      phoneNumber: unmaskPhoneNumber(data.phoneNumber),
    };
    try {
      setTimeout(async () => {
        const response = await createAccount(newData);
        if (response.data.status === 'success') {
          console.log('redirect to login');
          navigate('/login');
        }
      }, 1000);
    } catch (error) {
      alert('에러!');
    }
  };
  return (
    <StLoginContainer>
      <StForm onSubmit={handleSubmit(onSubmit)}>
        <NicknameInput register={register} errors={errors} />
        <EmailInput
          register={register}
          errors={errors}
          checkDuplication={true}
        />
        <PasswordInput register={register} errors={errors} />
        <PasswordConfirmInput
          register={register}
          errors={errors}
          getValues={getValues}
        />
        <PhoneNumberInput control={control} errors={errors} />
        <SubmitButton
          isSubmitting={isSubmitting}
          isSubmitted={isSubmitted}
          isDirty={isDirty}
          isValid={isValid}
        />
      </StForm>
    </StLoginContainer>
  );
};

export default SignUpForm;

const StLoginContainer = styled.div`
  width: 100%;
`;

const StForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const unmaskPhoneNumber = (phoneNumber) => {
  return phoneNumber.replace(/\D/, '');
};
