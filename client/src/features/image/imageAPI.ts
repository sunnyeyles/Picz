import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
const getAuthToken = () => {
  const cookieMatch = document.cookie.match(/token=([^;]+)/);
  return cookieMatch ? cookieMatch[1] : null;
};

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = getAuthToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (formData: FormData) => ({
        url: "api/image/newimage",
        method: "POST",
        body: formData,
      }),
    }),
    fetchAllImages: builder.query({
      query: () => ({
        url: "api/image/getallimages",
        method: "GET",
      }),
    }),
  }),
});

export const { useUploadImageMutation, useFetchAllImagesQuery } = imageApi;
