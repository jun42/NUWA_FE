import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../pages/not_found/NotFoundPage';
import MainPage from '../pages/main/MainPage';
import LoginPage from '../pages/login/index';
import SignupPage from '../pages/signup/index';
import SignupSocialPage from '../pages/signupSocial';
import SelectPlan from '../pages/selectPlan';
import SocialSignupRedirect from '../pages/signupSocial/SocialSignupRedirect';
import SocialLoginRedirect from '../pages/signupSocial/SocialLoginRedirect';
export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/signup-social',
        element: <SignupSocialPage />,
      },
      {
        path: '/select-plan',
        element: <SelectPlan />,
      },
      //oauth 회원 가입시 이메일과 provider(kakao,naver) 받는 페이지
      {
        path: '/signup/social',
        element: <SocialSignupRedirect />,
      },
      {
        path: '/loading/auth',
        element: <SocialLoginRedirect />,
      },
    ],
  },
]);
