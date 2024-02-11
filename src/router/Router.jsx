import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../pages/not_found/NotFoundPage';
import MainPage from '../pages/main/index';
import LoginPage from '../pages/login/index';
import SignupPage from '../pages/signup/index';
import SignupSocialPage from '../pages/signupSocial';
import SelectPlan from '../pages/selectPlan';
import Files from '../pages/sidebar_link/Files';
import Feature from '../pages/Feature';
import WorkAccess from '../pages/workAccess';
import SocialSignupRedirect from '../pages/signupSocial/SocialSignupRedirect';
import SocialLoginRedirect from '../pages/signupSocial/SocialLoginRedirect';
import FAQ from '../pages/FAQ';
import Inquiry from '../pages/Inquiry';

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
      {
        path: '/files',
        element: <Files />,
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
      {
        path: '/feat-description',
        element: <Feature />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/inquiry',
        element: <Inquiry />,
      },
      {
        path: '/feat-description',
        element: <Feature />,
      },
      {
        path: '/workAccess',
        element: <WorkAccess />,
      },
    ],
  },
]);
