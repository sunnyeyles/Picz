import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { useMemo } from "react";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useUser = () => {
  const user = useAppSelector((state) => state.user);
  const loading = useAppSelector((state) => !!state.user.loading);
  return useMemo(() => [user, loading] as const, [user, loading]);
};

export const useUserDetails = () => {
  const user = useAppSelector((state) => state.user);
  return useMemo(() => [user] as const, [user]);
};
