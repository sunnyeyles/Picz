import { createBrowserRouter, RouteObject } from "react-router-dom";
import { SignUpForm } from "../components/signUpForm/SignUpForm";
import { SignInForm } from "../components/signInForm/SignInForm";
import { Root } from "../pages/root/Root";
import { Account } from "../pages/account/Account";
import { UserDetails } from "../pages/userDetails/UserDetails";
import { ImageUpload } from "../pages/imageUpload/ImageUpload";
import { Settings } from "../pages/settings/Settings";
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
      {
        path: "/imageupload",
        element: <ImageUpload />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
];
export const Router = createBrowserRouter(routes);
