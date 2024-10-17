import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export const userApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: ({ username, password }) => ({
        url: "/user/signin",
        method: "POST",
        body: { username, password },
      }),
    }),
    signup: builder.mutation({
      query: ({ username, email, password }) => ({
        url: "/user/newuser",
        method: "POST",
        body: { username, email, password },
      }),
    }),
  }),
});

export const { useSigninMutation, useSignupMutation } = userApi;
