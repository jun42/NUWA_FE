import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from '@chakra-ui/react';
import { RxDotsVertical } from 'react-icons/rx';
import { useNavigate, useParams } from 'react-router-dom';
import { removeGroupChat } from '@apis/chat/groupChat';

const GroupChatMenu = () => {
  const { workSpaceId, roomId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        bg="white"
        icon={
          <RxDotsVertical
            color="#C3CAD9"
            size={'1.25rem'}
            _hover={{
              background: 'grey.100',
            }}
          />
        }
      />
      <MenuList>
        <MenuItem
          color={'red.500'}
          onClick={() => {
            const removeGroupChatPromise = removeGroupChat(
              workSpaceId,
              roomId
            ).then((r) => {
              navigate(`/workspace/${workSpaceId}`);
              return r;
            });
            // .catch((err) => {
            //   alert(err.response.status);

            // });
            toast.promise(removeGroupChatPromise, {
              success: {
                title: '채널이 삭제 성공!',
                description: '채팅 채널이 삭제되었습니다.',
                position: 'top',
              },
              error: {
                title: '채널 삭제 실패!',
                description: '채널 삭제 권한이 없습니다.',
                position: 'top',
              },
              loading: {
                title: '채널 삭제 요청 중',
                description: '잠시만 기다려주세요',
                position: 'top',
              },
            });
          }}
        >
          채팅 채널 삭제
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default GroupChatMenu;
