import { useQuery } from '@tanstack/react-query';
import { searchDirectChatRoomList } from '@apis/chat/chat';

export const useSearchDirectChatRoomListQuery = (
  workSpaceId,
  workSpaceMemberName
) => {
  const { data, isLoading } = useQuery({
    queryKey: [workSpaceId, workSpaceMemberName],
    queryFn: () => {
      return searchDirectChatRoomList(workSpaceId, workSpaceMemberName);
    },
  });
};
