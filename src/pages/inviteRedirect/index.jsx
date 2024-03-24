import { Box } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useNavigate, useParams } from 'react-router';
import useBoundStore from '../../store/store';
import { getToken } from '../../utils/auth';
const InviteRedirectPage = () => {
  const navigate = useNavigate();
  const { inviteCode } = useParams();
  const workSpaceId = atob(inviteCode).split('/')[1];
  // set isInvited True / persist
  const { setIsInvited, isInvited, setInvitingWorkSpaceId } = useBoundStore();
  if (!isInvited) {
    setIsInvited(true);
    setInvitingWorkSpaceId(workSpaceId);
  }

  // get workspace Id from invite code

  // check auth
  const accessToken = getToken();
  if (!accessToken) {
    setTimeout(() => {
      navigate('/login');
      alert('로그인이 필요합니다.');
    }, 700);
  } else {
    setTimeout(() => {
      navigate('/join'); //
    }, 700);
  }
  // not auth
  // 로그인/ 회원가입

  // 로그인 회원가입후에 isInvited 확인 해서 => 이동

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      py={'15vh'}
    >
      <Spinner
        thickness="10px"
        speed="0.5s"
        emptyColor="gray.200"
        color="secondary.500"
        width={'200px'}
        height={'200px'}
      />
    </Box>
  );
};

export default InviteRedirectPage;
