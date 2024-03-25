import {
  Button,
  ButtonGroup,
  ModalFooter as CharkModalFooter,
} from '@chakra-ui/react';

const ModalFooter = ({ onClose, handleSaveFile, imageSrc }) => {
  return (
    <CharkModalFooter p="20px 0">
      <ButtonGroup>
        <Button rounded="50px" w="120px" onClick={onClose}>
          취소
        </Button>
        <Button
          color="#fff"
          // bg="#5158FF"
          colorScheme="secondary"
          rounded="50px"
          w="120px"
          onClick={handleSaveFile}
          isDisabled={imageSrc.length === 0}
        >
          설정
        </Button>
      </ButtonGroup>
    </CharkModalFooter>
  );
};

export default ModalFooter;
