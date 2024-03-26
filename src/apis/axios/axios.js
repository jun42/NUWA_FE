import axios from 'axios';
import { getToken } from '@utils/auth';
import { reissueToken } from '../auth/auth';

const createInstance = (contentType) => {
  const config = {
    baseURL: import.meta.env.VITE_SERVER_API,
    timeout: 3000,
    headers: {
      'Content-Type': contentType,
    },
    withCredentials: true,
  };

  const instance = axios.create(config);

  instance.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (res) => res,
    async (err) => {
      const {
        config,
        response: { status },
      } = err;

      if (status !== 401 || config.sent) {
        return Promise.reject(err);
      }

      /** 2 */
      config.sent = true;
      reissueToken();

      return axios(config);
    }
  );

  // instance.interceptors.response.use(
  //   (response) => response,
  //   async (error) => {
  //     const refreshToken = getCookie('refreshToken');
  //     const { status } = error.response;
  //     if (status === 401) {
  //       const response = await reissueToken(refreshToken);
  //       return response;
  //     }
  //   }
  // );

  return instance;
};

export const request = createInstance('application/json');
export const imgRequest = createInstance('multipart/form-data');
