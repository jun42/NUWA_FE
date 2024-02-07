export const setTokenInStorage = (accessToken) => {
  localStorage.setItem('accessToken', accessToken);

  console.log('set accessToken in localstorage');
};

export const getToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken;
};
