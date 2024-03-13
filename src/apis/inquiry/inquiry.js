import { request } from "@apis/axios/axios";
/**
 *@param {Object} inquiryData 
 */

export const sendInquiryMail = async (inquiryData) => {
    try{
        const response =await request.post('/mail', inquiryData,{
            timeout: 5000
        });
        return response.data;
    } catch (error) {
        console.error('Error sending inquiry mail:', error);
        throw error;
    }

};