import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

const Root = lazy(() => import("../pages/root/Root"));
const ImageUpload = lazy(() => import("../pages/imageUpload/ImageUpload"));
const UserDetails = lazy(() => import("../pages/userDetails/UserDetails"));
const Settings = lazy(() => import("../pages/settings/Settings"));
const SignUpForm = lazy(() => import("../components/signUpForm/SignUpForm"));
const SignInForm = lazy(() => import("../components/signInForm/SignInForm"));
const Account = lazy(() => import("../pages/account/Account"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense>
        <Root />
      </Suspense>
    ),

    // path: "/",
    // element: (
    //   <Suspense>
    //     <Hero />
    //   </Suspense>
    // ),

    children: [
      {
        path: "/signup",
        element: (
          <Suspense>
            <SignUpForm />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: (
          <Suspense>
            <SignInForm />
          </Suspense>
        ),
      },
      {
        path: "/account",
        element: (
          <Suspense>
            <Account />
          </Suspense>
        ),
      },
      {
        path: "/userdetails",
        element: (
          <Suspense>
            <UserDetails />
          </Suspense>
        ),
      },
      {
        path: "/imageupload",
        element: (
          <Suspense>
            <ImageUpload />
          </Suspense>
        ),
      },
      {
        path: "/settings",

        element: (
          <Suspense>
            <Settings />
          </Suspense>
        ),
      },
    ],
  },
];
export const Router = createBrowserRouter(routes);
