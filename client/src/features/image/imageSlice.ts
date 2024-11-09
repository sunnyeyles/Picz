import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IImage {
  key: string;
  url: string;
}

interface IFetchImagesResponse {
  message: string;
  images: IImage[];
}

interface IImageState {
  username: string | null;
  email: string | null;
  loading?: boolean;
  imageUrls: string[];
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
    fetchAllImages: (state, action: PayloadAction<IFetchImagesResponse>) => {
      state.imageUrls = action.payload.images.map((image) => image.url); // Extract only the URLs
    },
  },
});

export const { fetchAllImages } = imageSlice.actions;

export default imageSlice.reducer;
