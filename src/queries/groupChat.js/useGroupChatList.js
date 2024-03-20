import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createGroupChannel, getChatChannelList } from '@apis/channel/channel';
import { removeGroupChat } from '@apis/chat/groupChat';

export const useGroupChatListQuery = (workSpaceId) => {
  const { data, isFetching, isSuccess } = useQuery({
    queryFn: async () => {
      const data = await getChatChannelList({ workSpaceId }).then(
        (r) => r.data.content
      );
      return data;
    },
    queryKey: ['groupChatList', workSpaceId],
    initialData: [],
  });

  return { data, isFetching, isSuccess };
};

export const useChatChannelListCreateMutation = (
  workSpaceId,
  channelName,
  channelType
) => {
  const queryClient = useQueryClient();
  const { mutate, mutateAsync } = useMutation({
    mutationKey: ['groupChatList', workSpaceId],
    mutationFn: () => {
      return createGroupChannel({
        workSpaceId,
        channelName,
        channelType,
      });
    },
    onSuccess: (_, response) => {
      setTimeout(() => {
        queryClient.invalidateQueries({
          queryKey: ['groupChatList', workSpaceId],
        });
      }, 600);
      return [_, response];
    },
  });

  return { mutate, mutateAsync };
};

export const useDeleteChatChannelMuation = (workSpaceId, channelId) => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync } = useMutation({
    mutationFn: () => {
      return removeGroupChat(workSpaceId, channelId);
    },
    mutationKey: ['groupChatList', workSpaceId],
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({
          queryKey: ['groupChatList', workSpaceId],
        });
      }, 600);
    },
  });
  return { mutate, mutateAsync };
};
