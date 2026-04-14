import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/user",
      providesTags: ["User"],
    }),

    updateUser: builder.mutation({
      query: (body) => ({
        url: "/user",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"], // invalidate apis under User tags when each update apis
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
