import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const GroupChatTextMenu = ({
  isDeleted,
  deleteSocketMessage,
  messageId,
  messageType,
  setReadOnly,
}) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<BsThreeDotsVertical size={'1rem'} />}
        variant="ghost"
      />
      <MenuList>
        {!isDeleted && (
          <MenuItem
            color={'red.500'}
            onClick={() => {
              deleteSocketMessage(messageId);
            }}
          >
            메시지 삭제하기
          </MenuItem>
        )}
        {messageType === 'TEXT' && (
          <MenuItem
            onClick={() => {
              setReadOnly(false);
            }}
          >
            수정하기
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default GroupChatTextMenu;
