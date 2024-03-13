import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const MyTextMenu = ({ isDeleted, deleteSocketMessage, messageId }) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<BsThreeDotsVertical />}
        variant="ghost"
        px={'1px'}
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
        <MenuItem>수정하기</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MyTextMenu;
