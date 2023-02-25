import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: '/users/create/',
        method: 'POST',
        body,
      })
    }),
    logIn: builder.mutation({
      query: (body) => ({
        url: '/api/token/',
        method: 'POST',
        body,
      })
    }),
  }),
});

export const { useRegisterMutation, useLogInMutation } = authApi;
