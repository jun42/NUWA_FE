import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCanvas } from '@apis/canvas/getCanvas.js';
import { getWorkspaceUserProfile } from '@apis/workspace/workspaceProfile.js';
import { searchCanvas } from '@apis/canvas/searchCanvas'; 
import { useToast } from '@chakra-ui/react';
import { deleteCanvas } from '@apis/canvas/deleteCanvas'; 
const useCanvasData = (workSpaceId, filter, searchTerm) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const fetchCanvasData = async () => {
    let workSpaceMemberId = '';
    // 'MINE' 필터가 선택된 경우, 사용자의 워크스페이스 멤버 ID를 조회
    if (filter === 'MINE') {
      const userProfileResponse = await getWorkspaceUserProfile(workSpaceId);
      workSpaceMemberId = userProfileResponse.data.data.id;
    }

    const canvasResponse = await fetchCanvas({
      workSpaceId,
      ...(workSpaceMemberId && { workSpaceMemberId }),
    });

    return canvasResponse.data.content;
  };

  const fetchData = async () => {
    if (searchTerm) {
      // 검색어가 있을 경우, 검색 API를 호출하여 캔버스 데이터를 조회
      const response = await searchCanvas({
        workSpaceId,
        title: searchTerm,
      });
      return response.data;
    } else {
      // 검색어가 없을 경우, 기본 로직(전체 데이터 또는 'MINE' 데이터)으로 데이터 조회
      return fetchCanvasData();
    }
  };

  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ['canvasData', { workSpaceId, filter, searchTerm }],
    queryFn: fetchData,
    onError: (error) => {
      toast({
        title: '데이터를 불러오는 데 실패했습니다.',
        description: error.message || '알 수 없는 에러가 발생했습니다.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
  });

  const deleteMutation = useMutation({
    mutationKey: ['deleteCanvas'],
    mutationFn: deleteCanvas,
    onSuccess: () => {
      // 성공적으로 데이터가 삭제되면 관련 쿼리 캐시 무효화
      queryClient.invalidateQueries(['canvasData']);
      toast({
        title: '캔버스 삭제 성공',
        description: '선택한 캔버스가 성공적으로 삭제되었습니다.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    },
    onError: (error) => {
      toast({
        title: '캔버스 삭제 실패',
        description: error.message || '삭제 중에 문제가 발생했습니다.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    },
  });

  return { data, error, isLoading, isError, refetch, deleteMutation };
};

export default useCanvasData;
