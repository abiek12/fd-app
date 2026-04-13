import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/users",
  }),
  tagTypes: ["User"],
  endpoints: () => {},
});
