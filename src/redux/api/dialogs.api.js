import { api } from "./api"

export const dialogsApi = api.injectEndpoints({
	endpoints: builder => ({
		getDialogs: builder.query({
			query: () => `/dialogs`,
			providesTags: () => [{
				type: "Dialogs",
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