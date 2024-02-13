import { useEffect } from 'react';
import { logout, reissueToken } from '@apis/axios/auth';
import useInterval from '@hooks/useInterval';

const AuthProvider = ({ children }) => {
  useEffect(() => {
    window.addEventListener('beforeunload', logout);
    return () => {
      window.removeEventListener('beforeunload', logout);
    };
  }, []);
  // 5분간격 토큰 재발행
  useInterval(() => {
    if (localStorage.getItem('accessToken')) {
      reissueToken();
    }
  }, 5 * 60 * 1000);

  //todo 뒤로가기  제어

  // useEffect(() => {
  //   window.addEventListener('click', logout);
  //   return () => {
  //     window.addEventListener('click', logout);
  //   };
  // });

  return <>{children}</>;
};

export default AuthProvider;
