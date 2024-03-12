import { request } from "@apis/axios/axios";

/**
 @param {Object} inquiryData 
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

export const sendHelpDeskMail = async(HelpDeskData) => {
    try{
        const response =await request.post('/mail/attached', HelpDeskData);
        return response.data;
    }catch(error){
        console.error('Error sending HelpDesk Mail:', error);
    }
}