import { useEffect } from 'react';
import { logoutRequest, reissueToken, login } from '@apis/axios/auth';
import useInterval from '@hooks/useInterval';
import { getToken, removeToken } from '../utils/auth';
import useBoundStore from '@store/store';
const AuthProvider = ({ children }) => {
  const { setIsLoggedIn } = useBoundStore();

  //todo : 소셜로그인에서 다른 앱으로 진입할 때 날아가는 버그.
  // 기능상 에러는 아니지만 의도하지는 않은거라서.. 어떻게 핸들링할지 고민중
  useEffect(() => {
    const handleLogout = () => {
      removeToken();
      logoutRequest();
      setIsLoggedIn(false);
    };
    window.addEventListener('beforeunload', handleLogout);
    return () => {
      window.removeEventListener('beforeunload', handleLogout);
    };
  }, []);
  // 5분간격 토큰 재발행
  useInterval(() => {
    if (getToken()) {
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
  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    }
  }, []);
  return <>{children}</>;
};

export default AuthProvider;
