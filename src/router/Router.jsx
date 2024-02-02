import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../pages/not_found/NotFoundPage';
import MainPage from '../pages/main/MainPage';
import LoginPage from '../pages/login/LoginPage';
import SignupPage from '../pages/signup/SignupPage';
import SelectPlan from '../pages/selectPlan';
import Feature from "../pages/Feature";
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
        path: '/select-plan',
        element: <SelectPlan />,
      },
      {
        path: '/feat-description',
        element: <Feature/>,
      },
    ],
  },
]);
