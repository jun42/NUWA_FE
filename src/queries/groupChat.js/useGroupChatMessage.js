import { useQuery } from '@tanstack/react-query';
import { getGroupChatMessage } from '@apis/chat/groupChat';

export const useGroupChatMessageQuery = (chatChannelRoomId) => {
  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ['groupChatMessage', chatChannelRoomId],
    queryFn: async () => {
      const response = await getGroupChatMessage(chatChannelRoomId);
      const data = await response.data.data.content;
      return data;
    },
  });
  return { data: data ? data : [], isFetching, isSuccess };
};
