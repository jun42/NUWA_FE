import Modal from '../../Modal';
import ConfirmFooter from './ConfirmFooter';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

const CreateProfileImage = ({ isOpen, onClose, userInfo }) => {
  const { userName, userJob } = userInfo;
  const isEmptyProfile = !userName && !userJob;
  if (isEmptyProfile)
    return (
      <Modal isOpen={isOpen} onClose={onClose} modalTitle="사용자 정보 입력 확인">
        사용자 이름 또는 직무를 입력하세요
        <ConfirmFooter onClose={onClose}/>
      </Modal>
    );
  return (
    <Modal isOpen={isOpen} onClose={onClose} modalTitle="프로필 설정">
      <ModalBody userInfo={userInfo} />
      <ModalFooter onClose={onClose} />
    </Modal>
  );
};

export default CreateProfileImage;
