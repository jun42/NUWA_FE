import Cookies from 'js-cookie';

export const setTokenInStorage = (accessToken) => {
  console.log('set Token in Storage:', accessToken);
  Cookies.set('accessToken', accessToken);
};

export const getToken = () => {
  const accessToken = Cookies.get('accessToken');
  if (!accessToken) console.error('Token Empty');
  return accessToken;
};

export const removeToken = () => {
  Cookies.remove('accessToken');
};
