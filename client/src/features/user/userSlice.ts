import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  username: string | null;
  email: string | null;
  // loading?: boolean;
  // token: string | null;
  // isAuthenticated: boolean;
}

const initialState: IUserState = {
  username: null,
  email: null,
  // token: localStorage.getItem("token"),
  // isAuthenticated: !!localStorage.getItem("token"),
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUserState>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      // state.isAuthenticated = true;
      // state.token = action.payload.token;
      // localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.username = null;
      state.email = null;
    },
  },
});

export const { logout, login } = userSlice.actions;

export default userSlice.reducer;
