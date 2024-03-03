import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes.jsx';
import { Flex, Box, Text, Image, Center, IconButton } from '@chakra-ui/react';
import bluedot from '../../assets/blue-dot.svg';
import notifications_off from '../../assets/notifications_off.svg';
import alarm_s_colored from '../../assets/alarm_s_colored.svg';
const style = {
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
};
export const Card = ({ id, text, index, moveCard }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <Flex
      h="80px"
      borderBottom="1px solid #C0C0C0CC"
      align="center"
      justify="space-between"
      ref={ref}
      style={{ ...style, opacity }}
      data-handler-id={handlerId}
    >
      <Box>
        <Flex>
          <IconButton
            size="sm"
            bgColor="white"
            _hover={{ backgroundColor: 'white' }}
            icon={<Image src={bluedot} />}
          />

          <Text fontSize="20px" fontWeight="500">
            {text}
          </Text>
        </Flex>
        <Flex>
          <Image w="11px" src={alarm_s_colored} ml="34px" mr="4px" />
          <Text fontSize="12px" fontWeight="500">
            PM 03:00
          </Text>
        </Flex>
      </Box>
      <IconButton
        size="sm"
        bgColor="white"
        _hover={{ backgroundColor: 'white' }}
        icon={<Image src={notifications_off} />}
      />
    </Flex>
  );
};
