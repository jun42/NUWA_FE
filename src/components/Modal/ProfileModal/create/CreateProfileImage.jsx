import Modal from '../../Modal';
import ConfirmFooter from './ConfirmFooter';
import ModalContent from './ModalBody';

const CreateProfileImage = ({
  isOpen,
  onClose,
  userInfo,
  email,
  setUserInfo,
  setWorkspace,
  workspace
}) => {
  const { workSpaceMemberName, workSpaceMemberJob } = userInfo;
  const isEmptyProfile = !workSpaceMemberName && !workSpaceMemberJob;
  if (isEmptyProfile)
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        modalTitle="사용자 정보 입력 확인"
      >
        사용자 이름 또는 직무를 입력하세요
        <ConfirmFooter onClose={onClose} />
      </Modal>
    );
  return (
    <Modal isOpen={isOpen} onClose={onClose} modalTitle="프로필 설정">
      <ModalContent
        userInfo={userInfo}
        email={email}
        onClose={onClose}
        setUserInfo={setUserInfo}
        setWorkspace={setWorkspace}
        workspace={workspace}
      />
    </Modal>
  );
};

export default CreateProfileImage;
