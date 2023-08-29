import { api } from "./api"

export const dialogsApi = api.injectEndpoints({
	endpoints: builder => ({
		getDialogs: builder.query({
			query: (queryTerm) => `/dialogs?q=${queryTerm}`,
			providesTags: (result, error, queryTerm) => [{
				type: "Dialogs",
				id: queryTerm,
			}]
		}),
		addDialog: builder.mutation({
			query: body => ({
				url: `/dialogs`,
				method: 'POST',
				body,
			}),
			invalidatesTags: () => [{
				type: "Dialogs",
			}]
		}),
	})
})

export const {
	useAddDialogMutation,
	useGetDialogsQuery,
} = dialogsApi