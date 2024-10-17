import { useState } from "react";
import { useSignupMutation } from "../features/user/userAPI";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
import { useUserDetails } from "./utilHooks";

interface ISignupFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export const useSignupHandler = () => {
  const dispatch = useDispatch();
  const [signup, { isLoading, error }] = useSignupMutation();
  const [notification, setNotification] = useState<{
    color: string;
    message: string;
  } | null>(null);

  const handleSignup = async (
    values: ISignupFormValues,
    resetForm: () => void
  ) => {
    try {
      const result = await signup(values).unwrap();
      setNotification({ color: "green", message: "Signup successful!" });
      resetForm();

      const { token, username, email } = result;
      document.cookie = `token=${token}; path=/; max-age=${
        60 * 60 * 24
      }; SameSite=Strict; Secure`;

      dispatch(login({ username, email }));
    } catch (err) {
      let errorMessage = "Signup failed!";
      if (error && "status" in error) {
        errorMessage = (error as any).data?.message || errorMessage;
      } else if (error && "message" in error) {
        errorMessage = error.message || errorMessage;
      }
      setNotification({ color: "red", message: errorMessage });
    }
  };

  return { handleSignup, notification, setNotification, isLoading };
};
