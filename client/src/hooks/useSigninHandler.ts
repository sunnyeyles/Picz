import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
import { useSigninMutation } from "../features/user/userAPI";

interface ISigninFormValues {
  username: string;
  password: string;
}

export const useSigninHandler = () => {
  const dispatch = useDispatch();
  const [signin, { isLoading }] = useSigninMutation();
  const [notification, setNotification] = useState<{
    color: string;
    message: string;
  } | null>(null);

  const handleSignin = async (values: ISigninFormValues) => {
    try {
      const result = await signin(values).unwrap();
      const { username, email } = result.user;
      const { token } = result;
      document.cookie = `token=${token}; path=/; max-age=86400; SameSite=Strict; Secure`;
      dispatch(login({ username, email }));
      setNotification({ color: "green", message: "Signin successful!" });
    } catch (err) {
      console.log(err);
      const errorMessage = "signin failed!";
      setNotification({ color: "red", message: errorMessage });
    }
  };

  return { handleSignin, notification, setNotification, isLoading };
};
