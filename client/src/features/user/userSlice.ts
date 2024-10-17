import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  username: string | null;
  email: string | null;
  loading?: boolean;
}

const initialState: IUserState = {
  username: null,
  email: null,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUserState>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.username = null;
      state.email = null;
    },
  },
});

export const { logout, login } = userSlice.actions;

export default userSlice.reducer;
