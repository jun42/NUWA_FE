import { axiosImgInstance } from '../axios/axiosImage'

export const createProfile = async(data) => {
    const response =  await axiosImgInstance.post('upload',data)
    return response.data
}