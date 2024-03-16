import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '@utils/auth';

// 로그인시 로그인페이지 회원가입페이지 제한

const useLoginGuard = () => {
  const accessToken = getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  return;
};

export default useLoginGuard;
