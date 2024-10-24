import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (formData: FormData) => ({
        url: "/image/newimage",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = imageApi;
