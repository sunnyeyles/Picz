import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

const Root = lazy(() => import("../pages/root/Root"));
const ImageUpload = lazy(() => import("../pages/imageUpload/ImageUpload"));
const UserDetails = lazy(() => import("../pages/userDetails/UserDetails"));
const Settings = lazy(() => import("../pages/settings/Settings"));
const SignUpForm = lazy(() => import("../components/signUpForm/SignUpForm"));
const SignInForm = lazy(() => import("../components/signInForm/SignInForm"));
const Account = lazy(() => import("../pages/account/Account"));
const Error = lazy(() => import("../pages/error/Error"));
const MyImages = lazy(() => import("../pages/myImages/MyImages"));
const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Root />
      </Suspense>
    ),
    children: [
      {
        path: "/signup",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SignUpForm />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SignInForm />
          </Suspense>
        ),
      },
      {
        path: "/myimages",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MyImages />
          </Suspense>
        ),
      },
      {
        path: "/account",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Account />
          </Suspense>
        ),
      },
      {
        path: "/userdetails",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UserDetails />
          </Suspense>
        ),
      },
      {
        path: "/imageupload",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ImageUpload />
          </Suspense>
        ),
      },
      {
        path: "/settings",

        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Settings />
          </Suspense>
        ),
      },
      {
        path: "/error",

        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Error />
          </Suspense>
        ),
      },
    ],
  },
];
export const Router = createBrowserRouter(routes);
