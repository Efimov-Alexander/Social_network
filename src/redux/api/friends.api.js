import { api } from "./api"

export const friendsApi = api.injectEndpoints({
	endpoints: builder => ({
		getFriendsAll: builder.query({
			query: () => `/friendsAll`,
			providesTags: () => [{
				type: "Friends",
			}]
		}),
		getFriendsOnline: builder.query({
			query: () => `/friendsOnline`,
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