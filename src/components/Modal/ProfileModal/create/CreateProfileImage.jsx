import Modal from '../../Modal';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

const CreateProfileImage = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} modalTitle="프로필 설정">
      <ModalBody />
      <ModalFooter onClose={onClose}/>
    </Modal>
  );
};

export default CreateProfileImage;
