import { useRouteError } from 'react-router-dom';
import { reissueToken } from '../../apis/auth/auth';
const ErrorBoundary = () => {
  const error = useRouteError();

  if (error.response.status === 401) {
    reissueToken();
  }
  return;
};

export default ErrorBoundary;
