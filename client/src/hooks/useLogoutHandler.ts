import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../features/user/userSlice";
import { clearAuthToken } from "../utils/authUtils";

export const useLogoutHandler = () => {
  const dispatch = useDispatch();
  clearAuthToken();
  const handleLogout = () => {
    clearAuthToken();
    dispatch(logoutAction());
  };
  return handleLogout;
};
