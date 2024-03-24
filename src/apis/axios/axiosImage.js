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
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client } from '@aws-sdk/client-s3';

export const uploadS3 = (imageFile) => {
  const formData = new FormData();
  formData.append('file', imageFile);
  formData.append('name', imageFile.name);

  const REGION = import.meta.env.VITE_APP_REGION;
  const ACCESS_KEY_ID = import.meta.env.VITE_APP_ACCESS_KEY_ID;
  const SECRET_ACCESS_KEY_ID = import.meta.env.VITE_APP_SECRET_ACCESS_KEY_ID;

  const client = new S3Client({
    region: REGION,
    credentials: {
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY_ID,
    },
  });

  const upload = new Upload({
    client: client,
    params: {
      Bucket: 'nuwa-image-bucket',
      Key: `upload/${imageFile.name}`,
      Body: imageFile,
    },
  });

  return upload.done();
};
