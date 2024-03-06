import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getuserList: builder.query({
      query: () => "/user",
      providesTags: ["user"],
    }),
    getuser: builder.query({
      query: (id) => `/user/${id}`,
      providesTags: ["user"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/user",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/user/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["user"],
    }),

    //project Api

    projectLists: builder.query({
      query: () => "/projects",
      providesTags: ["projects"],
      
    }),
    projectList: builder.query({
      query: (id) => `/projects/${id}`,
      providesTags: ["projects"],
    }),

    addProject: builder.mutation({
      query: (project) => ({
        url: "/projects",
        method: "POST",
        body: project,
      }),
      invalidatesTags: ["projects"],
    }),
    updateProject: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/projects/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["projects"],
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["projects"],
    }),

    //task api

    taskLists: builder.query({
      query: () => "/tasks",
      providesTags: ["tasks"],
    }),
    taskList: builder.query({
      query: (id) => `/tasks/${id}`,
      providesTags: ["tasks"],
    }),

    addTask: builder.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["tasks"],
    }),
    updateTask: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/tasks/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["tasks"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["tasks"],
    }),


  }),
});

export const {
  useGetuserListQuery,
  useGetuserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,

  useProjectListsQuery,
  useProjectListQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,

  useTaskListQuery,
  useTaskListsQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = userApi;



// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import axios from "axios";

// // Define a service using a base URL and expected endpoints
// export const userApi = createApi({
//   reducerPath: "userApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://task-management-opll.onrender.com", // Update the base URL
//     fetchFn: async (url, options) => {
//       const response = await axios({ url, ...options });
//       return { data: response.data, error: response.error };
//     },
//   }),
//   tagTypes: ["user"],
//   endpoints: (builder) => ({
//     getuserList: builder.query({
//       query: () => "/api/users/get-users",
//       providesTags: ["user"],
//     }),
//     getuser: builder.query({
//       query: (id) => `/user/${id}`,
//       providesTags: ["user"],
//     }),
//     addUser: builder.mutation({
//       query: (user) => ({
//         url: "/user",
//         method: "POST",
//         body: user,
//       }),
//       invalidatesTags: ["user"],
//     }),
//     updateUser: builder.mutation({
//       query: ({ id, ...rest }) => ({
//         url: `/user/${id}`,
//         method: "PUT",
//         body: rest,
//       }),
//       invalidatesTags: ["user"],
//     }),
//     deleteUser: builder.mutation({
//       query: (id) => ({
//         url: `/user/${id}`,
//         method: "DELETE",
//         body: id,
//       }),
//       invalidatesTags: ["user"],
//     }),
//   }),
// });

// export const {
//   useGetuserListQuery,
//   useGetuserQuery,
//   useAddUserMutation,
//   useUpdateUserMutation,
//   useDeleteUserMutation,
// } = userApi;
