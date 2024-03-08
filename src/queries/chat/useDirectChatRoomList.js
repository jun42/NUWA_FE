import { useQuery } from '@tanstack/react-query';
import { getDirectChatRoomList } from '../../apis/chat/chat';

export const useDirectChatRoomListQuery = (workSpaceId) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['directChatRoomList'],
    queryFn: async () => {
      const data = await getDirectChatRoomList(workSpaceId).then(
        (r) => r.data.data.content
      );
      return data;
    },
  });
  return { data, isLoading, isError };
};
