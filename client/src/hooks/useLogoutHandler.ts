import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../features/user/userSlice";

export const useLogoutHandler = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      document.cookie = "token=; path=/; max-age=0; SameSite=Strict; Secure";
      dispatch(logoutAction());
      console.log("Logout successful");
    } catch (err) {
      console.log("logout error:", err);
    }
  };

  return handleLogout;
};
