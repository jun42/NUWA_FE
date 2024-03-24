import { useNavigate, useParams } from 'react-router-dom';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { createDirectChatRoom } from '@apis/chat/chat';

const MemberListCard = ({ name, id, onClose }) => {
  const { workSpaceId } = useParams();
  const navigate = useNavigate();

  const createDirectChatRoomHandler = () => {
    //채팅에서 쓸 리시버아이디 설정
    //채팅룸 생성 혹은 중복시 핸들링
    createDirectChatRoom({
      workSpaceId,
      joinMemberId: id,
    })
      .then((r) => {
        const roomId = r.data.data.directChannelRoomId;
        navigate(`/workspace/${workSpaceId}/direct-chat/${roomId}`);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === 400) {
          const roomId = err.response.data.message;
          navigate(`/workspace/${workSpaceId}/direct-chat/${roomId}`);
        }
      })
      .finally(() => {
        onClose();
      });
  };
  return (
    <Flex
      _hover={{ bgColor: 'grey.100', cursor: 'pointer' }}
      padding={2}
      rounded={'md'}
      onClick={createDirectChatRoomHandler}
    >
      <Flex alignItems={'center'} gap={'24px'}>
        <Avatar size={'md'} name={name} />
        <Text fontWeight={700} fontSize={'14px'} color={'#4d5e80'}>
          {name}
        </Text>
      </Flex>
      <Box></Box>
    </Flex>
  );
};

export default MemberListCard;
