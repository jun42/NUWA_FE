import { request } from '../axios/axios';

export const createChatChannel = ({ workSpaceId, channelName }) => {
  request.post('/channel/chat', {
    workSpaceId,
    chatChannelName: channelName,
  });
};

export const createVoiceChannel = ({ workSpaceId, channelName }) => {
  request.post('/channel/voice', {
    workSpaceId,
    chatChannelName: channelName,
  });
};
