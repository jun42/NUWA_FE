import { imgRequest } from "@apis/axios/axios";

/**
 * 
 * @param {Object} emailData - 이메일 데이터 객체 { subject, email, content }
 * @param {Array} files - 첨부 파일 목록
 * @returns {Promise} API 호출의 결과를 나타내는 프로미스
 */

export const sendHelpDeskMail = async (emailData, files) => {
    const formData = new FormData();
    const emailDataBlob = new Blob([JSON.stringify(emailData)], { type: 'application/json' });
    formData.append("serviceInquiryMailRequestDto", emailDataBlob);
    files.forEach(file => formData.append("fileList", file));
    try {
      const response = await imgRequest.post('/mail/attached', formData,{
        timeout: 5000,
    });
      return response.data;
    } catch (error) {
      console.error('Error sending service inquiry email:', error);
      throw error;
    }
  };