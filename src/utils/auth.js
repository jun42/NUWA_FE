import Cookies from 'js-cookie';

export const setTokenInStorage = (accessToken) => {
  Cookies.set('accessToken', accessToken);
};

export const getToken = () => {
  const accessToken = Cookies.get('accessToken');
  return accessToken;
};

export const removeToken = () => {
  Cookies.remove('accessToken');
};
