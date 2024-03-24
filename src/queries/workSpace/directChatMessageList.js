import { useQuery } from '@tanstack/react-query';
import { getDirectChatMessageList } from '../../apis/chat/chat';

export const useDirectChatMessageListQuery = (roomId) => {
  const { data: directChatMessageList, isLoading } = useQuery({
    queryKey: ['directChatMessageList', roomId],
    queryFn: async () => {
      const response = await getDirectChatMessageList(
        roomId,
        0,
        10,
        'createAt',
        'asc'
      );
      const data = await response.data.data.content;
      return data.reverse();
    },
  });
  return {
    directChatMessageList: directChatMessageList ? directChatMessageList : [],
    isLoading,
  };
};
