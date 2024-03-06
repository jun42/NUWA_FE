import { useQuery } from '@tanstack/react-query';
import { getWorkSpaceMemberList } from '@apis/workspace/workSpaceMember';

export const useWorkSpaceMemberListQuery = (workSpaceId) => {
  const { data: memberList, isLoading } = useQuery({
    queryKey: ['workSpaceMemberList'],
    queryFn: async () => {
      const data = await getWorkSpaceMemberList(workSpaceId).then(
        (r) => r.data.data
      );
      return data;
    },
  });

  return { memberList, isLoading };
};
