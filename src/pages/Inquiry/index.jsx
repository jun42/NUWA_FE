import styled from 'styled-components';
import TitleText from './TitleText';
import InputSection from './InputSection';
import { sendInquiryMail } from '@apis/inquiry/inquiry.js';
import { useMutation } from '@tanstack/react-query';

const Inquiry = () => {
  const mutation = useMutation({
    mutationFn: sendInquiryMail,
    onSuccess: () => {
      alert('도입문의 메일이 성공적으로 발송되었습니다.');
    },
    onError: (error) => {
      alert('메일 발송에 실패했습니다. 다시 시도해 주세요.');
      console.error('메일 발송 실패:', error);
    },
  });

  return (
    <StContainer>
      <TitleText />
      <InputSection onSendInquiry={(formData) => mutation.mutate(formData)} />
    </StContainer>
  );
};

export default Inquiry;

const StContainer = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 64px 12px;
  gap: 50px;
  margin: 0 auto;
`;
