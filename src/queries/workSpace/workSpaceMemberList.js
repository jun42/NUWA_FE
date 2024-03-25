import { useQuery } from '@tanstack/react-query';
import { getWorkSpaceMemberList } from '@apis/workspace/workSpaceMember';
import { getMyInfo } from '../../apis/workspace/workSpaceMember';

export const useWorkSpaceMemberListQuery = (workSpaceId) => {
  const {
    data: memberList,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['workSpaceMemberList'],
    queryFn: async () => {
      const data = await getWorkSpaceMemberList(workSpaceId).then(
        (r) => r.data.data
      );
      return data;
    },
    initialData: [],
  });

  return { memberList, isLoading, isSuccess };
};

export const useMyInfoQuery = (workSpaceId) => {
  const { data: myInfo, isLoading } = useQuery({
    queryKey: ['myInfo'],
    queryFn: async () => {
      const data = await getMyInfo(workSpaceId).then((r) => r.data.data);
      return data;
    },
  });

  return { myInfo, isLoading };
};
