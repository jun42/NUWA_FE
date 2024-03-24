import { useNavigate, useParams } from 'react-router-dom';
import {
  Avatar,
  Box,
  Checkbox,
  Circle,
  Flex,
  Radio,
  Text,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

const InviteMemberList = ({
  name,
  id,
  onClose,
  selectedList,
  setSelectedList,
}) => {
  const { workSpaceId } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  return (
    <Flex
      alignItems={'center'}
      justifyContent={'space-between'}
      pr={'1rem'}
      mr={'1rem'}
      rounded={'md'}
      _hover={{ bgColor: 'grey.100', cursor: 'pointer' }}
      _active={{ transform: 'scale(0.98)' }}
      onClick={() => {
        if (!selected) {
          setSelectedList((state) => [...state, id]);
          setSelected(true);
        } else {
          setSelectedList((state) => {
            return [...state.filter((item) => item !== id)];
          });
          setSelected(false);
        }
      }}
    >
      <Flex padding={2}>
        <Flex alignItems={'center'} gap={'24px'}>
          <Avatar size={'md'} name={name} />
          <Text fontWeight={700} fontSize={'14px'} color={'#4d5e80'}>
            {name}
          </Text>
        </Flex>
      </Flex>
      <Box>
        <Circle
          size={'1.6rem'}
          border={'2px solid'}
          borderColor={'secondary.500'}
        >
          {selected && <Circle size={'0.8rem'} bg={'secondary.500'} />}
        </Circle>
      </Box>
    </Flex>
  );
};

export default InviteMemberList;
