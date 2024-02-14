import {
  Modal as ChaModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

const Modal = ({ isOpen, onClose, modalTitle, children, hasButton }) => {
  if (!isOpen) return;
  // children vs modalBody
  return (
    <ChaModal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {hasButton && <ModalFooter>{}</ModalFooter>}
      </ModalContent>
    </ChaModal>
  );
};

export default Modal;
