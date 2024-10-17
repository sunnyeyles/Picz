import { createBrowserRouter, RouteObject } from "react-router-dom";
import { SignUpForm } from "../components/SignUpForm";
import { Root } from "../pages/root/Root";
import { Account } from "../pages/account/Account";
import { SignInForm } from "../components/SignInForm";
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
