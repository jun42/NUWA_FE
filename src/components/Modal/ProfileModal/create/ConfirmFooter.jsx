import { Button, ModalFooter as CharkModalFooter } from '@chakra-ui/react';

const ConfirmFooter = ({onClose}) => {
  return (
    <CharkModalFooter  p="20px 0">
      <Button rounded="50px" w="120px" onClick={onClose}>
        확인
      </Button>
    </CharkModalFooter>
  );
};

export default ConfirmFooter;
