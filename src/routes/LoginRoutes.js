// project import
import MinimalLayout from 'layout/MinimalLayout';
import AuthLogin from 'pages/authentication/Login';
import AuthRegister from 'pages/authentication/Register';

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'login',
      element: <AuthLogin />
    },
    {
      path: 'register',
      element: <AuthRegister />
    }
  ]
};

export default LoginRoutes;
