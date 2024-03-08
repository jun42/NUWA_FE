import { useQuery } from '@tanstack/react-query';
import { getDirectChatRoomInfo } from '../../apis/chat/chat';

export const useDirectChatRoomInfoQuery = (
  workSpaceId,
  directChannelRoomId
) => {
  const { data, isLoading } = useQuery({
    queryKey: ['directChatRoomInfo'],
    queryFn: async () => {
      const data = await getDirectChatRoomInfo(
        workSpaceId,
        directChannelRoomId
      ).then((r) => r.data.data);
      return data;
    },
  });
  return { data, isLoading };
};
