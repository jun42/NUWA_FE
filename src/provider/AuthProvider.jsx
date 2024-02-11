import { useEffect } from 'react';
import { logout } from '../apis/axios/auth';

const AuthProvider = (props) => {
  const deleteAccessToken = () => {
    localStorage.removeItem('accessToken');
  };

  useEffect(() => {
    window.addEventListener('beforeunload', deleteAccessToken);
    return () => {
      window.removeEventListener('beforeunload', deleteAccessToken);
    };
  }, []);

  //todo 뒤로가기  제어

  // useEffect(() => {
  //   window.addEventListener('click', logout);
  //   return () => {
  //     window.addEventListener('click', logout);
  //   };
  // });

  return <>{props.children}</>;
};

export default AuthProvider;
