import { useLocation, useNavigate } from 'react-router-dom';
import useBoundStore from '../../store/store';
import { Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { chekcDuplicateEmail } from '../../apis/axios/auth';

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

  setTimeout(() => {
    navigate('/signup-social');
  }, 1000);

  // 이메일 중복 체크 미리
  useEffect(() => {
    chekcDuplicateEmail(email).then(({ isValid }) => {
      if (isValid) {
        setTimeout(() => {
          navigate('/signup-social');
        }, 1000);
      } else {
        alert('이미 사용중인 이메일입니다.');
        navigate('/signup-social');
      }
    });
  }, []);
  return (
    <div>
      <Spinner
        thickness="10px"
        speed="0.5s"
        emptyColor="gray.200"
        color="secondary.500"
        width={'200px'}
        height={'200px'}
      />
    </div>
  );
};

export default SocialSignupRedirect;
