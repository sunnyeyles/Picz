import { useState } from "react";
import { useSignupMutation } from "../features/user/userAPI";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";

interface ISignupFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export const useSignupHandler = () => {
  const dispatch = useDispatch();
  const [signup, { isLoading }] = useSignupMutation();
  const [notification, setNotification] = useState<{
    color: string;
    message: string;
  } | null>(null);

  const handleSignup = async (values: ISignupFormValues) => {
    try {
      const result = await signup(values).unwrap();
      console.log("From handle signup hook the result: ", result);
      setNotification({ color: "green", message: "Signup successful!" });

      const { user } = result;
      const token = user.token;
      localStorage.setItem("SavedToken", "Bearer " + token);
    } catch (err) {
      console.log(err);
      const errorMessage = "Signup failed!";

      setNotification({ color: "red", message: errorMessage });
    }
  };

  return { handleSignup, notification, setNotification, isLoading };
};
