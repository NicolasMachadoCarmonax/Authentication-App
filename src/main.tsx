import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Authentication } from './pages/authentication/Authentication.tsx';
import { SignUp } from './pages/authentication/signUp/signUp.tsx'
import { SignIn } from './pages/authentication/signIn/signIn.tsx'
import { ConfirmSignIn } from './pages/authentication/confirmSignIn/ConfirmSignIn.tsx';
import { ConfirmSignUp } from './pages/authentication/confirmSignUp/confirmSignUp.tsx';
import { Amplify } from 'aws-amplify';
import {
  RecoilRoot,
} from 'recoil';
import { routeApp, routeAuthentication, routeAuthenticationSignUp, routeAuthenticationSignIn, routeAuthenticationConfirmSignIn, routeAuthenticationConfirmSignUp } from './constants/constants.ts';
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-2_AnTHJe1s0",
      userPoolClientId: "7i666u5d9avd5qtt59mjamdgi8",
      signUpVerificationMethod: 'code'
    },
  },
});

const router = createBrowserRouter([
  {
    path: routeApp,
    element: <App />,
  },
  {
    path: routeAuthentication,
    element: <Authentication />,
    children: [
      {
        path: routeAuthenticationSignUp,
        element: <SignUp />,
      },
      {
        path: routeAuthenticationSignIn,
        element: <SignIn />,
      },
      {
        path: routeAuthenticationConfirmSignUp,
        element: <ConfirmSignUp/>
      },
      {
        path: routeAuthenticationConfirmSignIn,
        element: <ConfirmSignIn/>
      },    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router}/>
    </RecoilRoot>
  </React.StrictMode>,
)
