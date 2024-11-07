import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IImageState {
  username: string | null;
  email: string | null;
  loading?: boolean;
  imageUrls: [];
}

const initialState: IImageState = {
  username: null,
  email: null,
  imageUrls: [],
};

export const imageSlice = createSlice({
  name: "newImage",
  initialState,
  reducers: {
    // not needed
    // newImage: (state, action: PayloadAction<IImageState>) => {
    //   state.username = action.payload.username;
    //   state.email = action.payload.email;
    // },
    fetchAllImages: (state, action: PayloadAction<IImageState>) => {
      state.imageUrls = action.payload.imageUrls;
    },
  },
});

export const { fetchAllImages } = imageSlice.actions;

export default imageSlice.reducer;
