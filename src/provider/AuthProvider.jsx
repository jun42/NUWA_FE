import { useEffect } from 'react';
import { logout, reissueToken } from '@apis/axios/auth';
import useInterval from '@hooks/useInterval';

const AuthProvider = ({ children }) => {
  //todo : 소셜로그인에서 다른 앱으로 진입할 때 날아가는 버그.
  // 기능상 에러는 아니지만 의도하지는 않은거라서.. 어떻게 핸들링할지 고민중
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
