import { api } from "./api"

export const applicationsApi = api.injectEndpoints({
	endpoints: builder => ({
		getApplicationsIncoming: builder.query({
			query: () => `/applicationsIncoming`,
			providesTags: () => [{
				type: "Applications",
			}]
		}),
		getApplicationsOutgoing: builder.query({
			query: () => `/applicationsOutgoing`,
			providesTags: () => [{
				type: "Applications",
			}]
		}),
		deleteApplicationIncoming: builder.mutation({
			query: userId => ({
				url: `/applicationsIncoming/${userId}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => [{
				type: "Applications",
			}]
		}),
		deleteApplicationOutgoing: builder.mutation({
			query: userId => ({
				url: `/applicationsOutgoing/${userId}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => [{
				type: "Applications",
			}]
		}),
	})
})

export const {
	useGetApplicationsIncomingQuery,
	useGetApplicationsOutgoingQuery,
	useDeleteApplicationIncomingMutation,
	useDeleteApplicationOutgoingMutation,
} = applicationsApi