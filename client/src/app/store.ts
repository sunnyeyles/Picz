import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import imageReducer from "../features/image/imageSlice";
import { userApi } from "../features/user/userAPI";
const environment = import.meta.env.VITE_NODE_ENV;
import { imageApi } from "../features/image/imageAPI";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    image: imageReducer,
    [imageApi.reducerPath]: imageApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
  devTools: environment !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
