import Cookies from 'js-cookie';

export const setTokenInStorage = (accessToken) => {
  console.log('set Token in Storage');
  Cookies.set('accessToken', accessToken);
};

export const getToken = () => {
  console.log('get Token from Storage');

  const accessToken = Cookies.get('accessToken');
  if (!accessToken) console.log('token empty!');
  return accessToken;
};

export const removeToken = () => {
  Cookies.remove('accessToken');
};
