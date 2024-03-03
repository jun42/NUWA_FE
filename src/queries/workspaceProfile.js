import { useQuery } from '@tanstack/react-query';
import { getWorkspaceUserProfile } from '../apis/workspace/workspaceProfile';

export const useGetWorkspaceProfileQuery = (workSpaceId) => {
  const { data, isLoading } = useQuery({
    queryKey: ['workspaceUserProfile'],
    queryFn: () => getWorkspaceUserProfile(workSpaceId),
  });
  return { data: data?.data?.data, isLoading };
};
//
// "id": 1,
// "name": "윤철1",
// "job": "직무1",
// "image": "",
// "email": "enjumn@nate.com",
// "phoneNumber": "1111111-1111",
// "workSpaceMemberType": null
