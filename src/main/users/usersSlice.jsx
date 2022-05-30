import { apiSlice } from '../../api/apiSlice'

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            providesTags: ['Users']
        }),
        // getUserById: builder.query({
        //     query: id => `/users/?id=${id}`,

        //     transformResponse: responseData => {
        //         return responseData[0]
        //     }
        // }),
        getUserById: builder.query({
            query: id => `/users/?id=${id}`,
            transformResponse: responseData => {
                return responseData[0]
            },
            invalidatesTags: ['Users']
        }),
        addUser: builder.mutation({
            query: body => ({
                url: '/users',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['Users']
        }),
    })
})

export const { useGetUsersQuery, useGetUserByIdQuery, useAddUserMutation } = extendedApiSlice