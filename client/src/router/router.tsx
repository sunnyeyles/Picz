import { createBrowserRouter, RouteObject } from "react-router-dom";
import { SignUpForm } from "../components/signUpForm/SignUpForm";
import { SignInForm } from "../components/signInForm/SignInForm";
import { Root } from "../pages/root/Root";
import { Account } from "../pages/account/Account";
import { UserDetails } from "../pages/userDetails/UserDetails";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/signup",
        element: <SignUpForm />,
      },
      {
        path: "/signin",
        element: <SignInForm />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/userdetails",
        element: <UserDetails />,
      },
    ],
  },
];
export const Router = createBrowserRouter(routes);
