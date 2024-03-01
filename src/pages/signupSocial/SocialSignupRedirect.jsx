import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useBoundStore from '@store/store';
import { Spinner } from '@chakra-ui/react';
import { chekcDuplicateEmail } from '@apis/axios/auth';
import styled from 'styled-components';

const SocialSignupRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const email = searchParams.get('email');
  const provider = searchParams.get('provider');

  const setSocialEmail = useBoundStore((state) => state.setSocialEmail);
  const setSocialProvider = useBoundStore((state) => state.setSocialProvider);

  setSocialEmail(email);
  setSocialProvider(provider);

  // 이메일 중복 체크 미리
  useEffect(() => {
    chekcDuplicateEmail(email).then(({ isValid }) => {
      let timeoutid;
      if (isValid) {
        timeoutid = setTimeout(() => {
          navigate('/signup-social');
        }, 200);
        return () => {
          clearTimeout(timeoutid);
        };
      } else {
        alert('이미 사용중인 이메일입니다.');
        navigate('/signup-social');
      }
    });
  }, []);
  return (
    <StContainerWrap>
      <StContainer>
        <Spinner
          thickness="10px"
          speed="0.5s"
          emptyColor="gray.200"
          color="secondary.500"
          width={'200px'}
          height={'200px'}
        />
      </StContainer>
    </StContainerWrap>
  );
};

export default SocialSignupRedirect;

const StContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 468px;
  gap: 64px;
  margin: 0 auto;
  align-items: center;
`;

const StContainerWrap = styled.div`
  background-color: #f1f4f9;
  width: 100%;
  height: 100%;
  padding: 64px 12px;
`;
