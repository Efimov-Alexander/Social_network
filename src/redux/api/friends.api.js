import { api } from "./api"

export const friendsApi = api.injectEndpoints({
	endpoints: builder => ({
		getFriendsAll: builder.query({
			query: (queryTerm) => `/friendsAll?q=${queryTerm}`,
			providesTags: () => [{
				type: "Friends",
			}]
		}),
		getFriendsOnline: builder.query({
			query: (queryTerm) => `/friendsOnline?q=${queryTerm}`,
			providesTags: () => [{
				type: "Friends",
			}]
		}),
		postFriendsAll: builder.mutation({
			query: friend => ({
				url: `/friendsAll`,
				body: friend,
				method: 'POST',
			}),
			invalidatesTags: () => [{
				type: "Friends",
			}]
		}),
		postFriendsOnline: builder.mutation({
			query: friend => ({
				url: `/friendsOnline`,
				body: friend,
				method: 'POST',
			}),
			invalidatesTags: () => [{
				type: "Friends",
			}]
		}),
	})
})

export const {
	usePostFriendsAllMutation,
	usePostFriendsOnlineMutation,
	useGetFriendsAllQuery,
	useGetFriendsOnlineQuery,
} = friendsApi