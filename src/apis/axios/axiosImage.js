import axios from 'axios';

const createInstance = () => {
    const config = {
      baseURL: import.meta.env.VITE_SERVER_IMAGE_ADDRESS,
      timeout: 3000,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    };
    const instance = axios.create(config);
    instance.interceptors.request.use((config) => {
      
      return config;
    });

    return instance
}

export const axiosImgInstance = createInstance()