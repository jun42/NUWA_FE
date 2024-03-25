import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getDirectChatMessageList } from '../../apis/chat/chat';

export const useDirectChatMessageListQuery = (roomId, messageIndex, size) => {
  const { data, isLoading } = useQuery({
    queryKey: ['directChatMessageList', roomId, messageIndex],
    queryFn: async () => {
      const response = await getDirectChatMessageList(
        roomId,
        messageIndex,
        size,
        'createAt',
        'asc'
      );
      const data = await response.data.data.content;
      return data.reverse();
    },
  });
  return {
    directChatMessageList: data ? data : [],
    isLoading,
  };
};

// export const useDirectChatMessageInfiniteQuery = (
//   roomId,
//   messageIndex,
//   size
// ) => {
//   const {
//     data,
//     fetchNextPage,
//     fetchPreviousPage,
//     hasNextPage,
//     hasPreviousPage,
//     isFetchingNextPage,
//   } = useInfiniteQuery({
//     queryKey: ['directChatMessageInfinite', roomId],
//     queryFn: async ({ pageParam = 0 }) => {
//       return getDirectChatMessageList(
//         roomId,
//         pageParam,
//         size,
//         'createAt',
//         'asc'
//       );
//       // const data = await response.data.data.content;
//       // return data.reverse();
//     },
//     initialPageParam: {
//       roomId,
//       messageIndex,
//       size,
//       sortBy: 'createAt',
//       orderBy: 'asc',
//     },
//   });
// };
