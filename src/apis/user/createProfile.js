import { dataURItoBlob } from '../../components/TextEditorFunctionalComponent/quill/customOptions';
import { axiosImgInstance, uploadS3 } from '../axios/axiosImage';

// export const createProfile = async (data) => {
//  const formData = new FormData()
//  formData.append('img', data, 'image.jpg')
//   const response = await axiosImgInstance.post('upload', formData);
//   return response.data;
// };

export const createProfile = async (data) => {
  const file = new File([data], `${new Date()}-image.png`);

  const location = await uploadS3(file).then((r) => {
    return r.Location;
  });
  // const formData = new FormData();
  // formData.append('img', data, 'image.jpg');
  // const response = await uploadS3(formData);
  // return response.data;
  return { location };
};
