import { ModalCloseButton, ModalHeader } from '@chakra-ui/react';

const CreateChannelHeader = () => {
  return (
    <ModalHeader
      fontSize={'24px'}
      fontWeight={600}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      채널생성하기
      <ModalCloseButton size={'24px'} position={'static'} />
    </ModalHeader>
  );
};

export default CreateChannelHeader;
