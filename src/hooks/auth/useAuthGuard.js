import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../utils/auth';
const useAuthGuard = () => {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const accessToken = getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      alert('로그인이 필요합니다');
      navigate('/login');
    } else {
      setIsAuthChecked(true);
    }
  }, [accessToken, navigate]);

  return { isAuthChecked };
};

export default useAuthGuard;
