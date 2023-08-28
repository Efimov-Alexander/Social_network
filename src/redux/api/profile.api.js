import { api } from "./api"

export const applicationsApi = api.injectEndpoints({
	endpoints: builder => ({
		getProfile: builder.query({
			query: userId => `/users/${userId}`,
			providesTags: () => [{
				type: "Profile",
			}]
		}),
		editProfilePosts: builder.mutation({
			query: newProfile => ({
				url: `/users/${newProfile.id}`,
				method: 'PATCH',
				body: newProfile,
			}),
			invalidatesTags: () => [{
				type: "Profile",
			}]
		}),
		editProfileInfo: builder.mutation({
			query: newProfile => ({
				url: `/users/${newProfile.id}`,
				method: 'PATCH',
				body: newProfile,
			}),
			invalidatesTags: () => [{
				type: "Profile",
			}]
		}),
	})
})

export const {
	useGetProfileQuery,
	useEditProfilePostsMutation,
	useEditProfileInfoMutation,
} = applicationsApi