import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { RxDotsVertical } from 'react-icons/rx';
import { leaveDirectChatRoom } from '../../apis/chat/chat';
import { useNavigate, useParams } from 'react-router-dom';

const DirectChatMenu = () => {
  const { workSpaceId, roomId } = useParams();
  const navigate = useNavigate();
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
            leaveDirectChatRoom(workSpaceId, roomId)
              .then((r) => {
                navigate(`/workspace/${workSpaceId}/chatboard/`);
              })
              .catch((err) => alert(err));
          }}
        >
          다이렉트 채팅방 나가기
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DirectChatMenu;
