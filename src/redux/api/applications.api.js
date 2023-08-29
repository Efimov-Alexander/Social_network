import { api } from "./api"

export const applicationsApi = api.injectEndpoints({
	endpoints: builder => ({
		getApplicationsIncoming: builder.query({
			query: (queryTerm) => `/applicationsIncoming?q=${queryTerm}`,
			providesTags: (result, error, queryTerm) => [{
				type: "Applications",
				id: queryTerm
			}]
		}),
		getApplicationsOutgoing: builder.query({
			query: (queryTerm) => `/applicationsOutgoing?q=${queryTerm}`,
			providesTags: (result, error, queryTerm) => [{
				type: "Applications",
				id: queryTerm
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