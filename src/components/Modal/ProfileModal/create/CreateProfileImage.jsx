import Modal from '../../Modal';
import ModalBody from './ModalBody';

const CreateProfileImage = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} modalTitle="프로필 설정">
      <ModalBody />
    </Modal>
  );
};

export default CreateProfileImage;
