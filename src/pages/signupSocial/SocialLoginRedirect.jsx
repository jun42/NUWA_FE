import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Spinner } from '@chakra-ui/react';
import { setTokenInStorage } from '@utils/auth';
import useBoundStore from '../../store/store';

const SocialLoginRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { isInvited } = useBoundStore();

  const accessToken = searchParams.get('accessToken');
  setTokenInStorage(accessToken);
  useEffect(() => {
    setTimeout(() => {
      if (isInvited) {
        navigate('/join');
      } else {
        navigate('/');
      }
    }, 1000);
  }, []);
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
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

export default SocialLoginRedirect;
