import { apiSlice } from '../../api/apiSlice'
import { sub } from 'date-fns'

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            transformResponse: res => res.sort((a,b) => b.id - a.id),
            providesTags: ['Posts']
        }),
        addPost: builder.mutation({
            query: initialPost => ({
                url: '/posts',
                method: 'POST',
                body: {
                    ...initialPost,
                    date: new Date().toISOString(),
                }
            }),
            invalidatesTags: ['Posts']
        }),
        getPostById: builder.query({
            query: id => `/posts/?id=${id}`,
            transformResponse: responseData => {
                let min = 1
                if (!responseData[0]?.date) responseData[0].date = sub(new Date(), { minutes: min++ }).toISOString()
                return responseData[0]
            }
        }),
        updatePost: builder.mutation({
            query: initialPost => ({
                url: `/posts/${initialPost.id}`,
                method: 'PUT',
                body: {
                    ...initialPost,
                    date: new Date().toISOString()
                }
            }),
            invalidatesTags: ['Posts']
        }),
        deletePost: builder.mutation({
            query: ({ id }) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: ['Posts']
        })
    })
})

export const { useGetPostsQuery, useGetPostByIdQuery, useUpdatePostMutation, useAddPostMutation, useDeletePostMutation } = extendedApiSlice