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
  const [signin] = useSigninMutation();
  const [notification, setNotification] = useState<{
    color: string;
    message: string;
  } | null>(null);

  const handleSignin = async (
    values: ISigninFormValues,
    resetForm: () => void
  ) => {
    try {
      const result = await signin(values).unwrap();
      console.log("From the signin hook: ", result);
      const { username, email } = result.user;
      const { token } = result;
      document.cookie = `token=${token}; path=/; max-age=86400; SameSite=Strict; Secure`;
      dispatch(login({ username, email }));
      setNotification({ color: "green", message: "Signin successful!" });
      resetForm();
    } catch (err) {
      let errorMessage = "Signin failed!";
      console.log(err);
      setNotification({ color: "red", message: errorMessage });
    }
  };

  return { handleSignin, notification, setNotification };
};
