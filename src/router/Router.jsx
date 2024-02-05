import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../pages/not_found/NotFoundPage';
import MainPage from '../pages/main/MainPage';
import LoginPage from '../pages/login/index';
import SignupPage from '../pages/signup/index';
import SelectPlan from '../pages/selectPlan';
import CreateWorkspace from '../pages/createWorkspace';
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
        path: '/create-workspace',
        element: <CreateWorkspace />,
      }
    ],
  },
]);
