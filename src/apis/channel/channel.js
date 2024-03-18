import { request } from '../axios/axios';

export const createGroupChannel = ({
  workSpaceId,
  channelName,
  channelType,
}) => {
  request.post(`/channel/${channelType}`, {
    workSpaceId,
    chatChannelName: channelName,
  });
};

// export const createVoiceChannel = ({ workSpaceId, channelName }) => {
//   request.post('/channel/voice', {
//     workSpaceId,
//     chatChannelName: channelName,
//   });
// };

export const getChatChannelList = async ({ workSpaceId }) => {
  try {
    const response = await request.get(`/channel/chat/${workSpaceId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching chat channel list:', error);
    throw error;
  }
};

export const fetchChatChannelList = async ({ workSpaceId }) => {
  try {
    const chatChannelList = await getChatChannelList({ workSpaceId });
    return chatChannelList.data;
  } catch (error) {
    console.error('Error fetching chat channel list:', error);
  }
};
