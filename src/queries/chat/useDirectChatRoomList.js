import { useQuery } from '@tanstack/react-query';
import { getDirectChatMessageList } from '../../apis/chat/chat';

export const useDirectChatRoomListQuery = (workSpaceId) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['directChatRoomList'],
    queryFn: async () => {
      const data = await getDirectChatMessageList(workSpaceId).then(
        (r) => r.data.data.content
      );
      return data;
    },
  });
  return { data, isLoading, isError };
};
