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

  return instance;
};

export const axiosImgInstance = createInstance();

import AWS from 'aws-sdk';

export const uploadS3 = (imageFile) => {
  const formData = new FormData();
  formData.append('file', imageFile);
  formData.append('name', imageFile.name);

  const REGION = import.meta.env.VITE_APP_REGION;
  const ACESS_KEY_ID = import.meta.env.VITE_APP_ACCESS_KEY_ID;
  const SECRET_ACESS_KEY_ID = import.meta.env.VITE_APP_SECRET_ACCESS_KEY_ID;

  AWS.config.update({
    region: REGION,
    accessKeyId: ACESS_KEY_ID,
    secretAccessKey: SECRET_ACESS_KEY_ID,
  });

  console.log(formData, imageFile);
  const upload = new AWS.S3.ManagedUpload({
    params: {
      ACL: 'public-read',
      Bucket: 'nuwa-image-bucket',
      Key: `upload/${imageFile.name}`,
      Body: imageFile,
    },
  });

  return upload.promise();
};
