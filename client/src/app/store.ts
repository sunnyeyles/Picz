import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { userApi } from "../features/user/userAPI";
const environment = import.meta.env.VITE_NODE_ENV;

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
  devTools: environment !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
