import { api } from "./api"

export const openedDialogApi = api.injectEndpoints({
	endpoints: builder => ({
		getOpenedDialog: builder.query({
			query: userId => `/users/${userId}`,
			providesTags: () => [{
				type: "Dialogs",
			}]
		}),
		editOpenedDialogMessageDialogs: builder.mutation({
			query: editUser => ({
				url: `/dialogs/${editUser.id}`,
				method: 'PATCH',
				body: editUser,
			}),
			invalidatesTags: () => [{
				type: "Dialogs",
			}]
		}),
		editOpenedDialogMessageUsers: builder.mutation({
			query: editUser => ({
				url: `/users/${editUser.id}`,
				method: 'PATCH',
				body: editUser,
			}),
			invalidatesTags: () => [{
				type: "Dialogs",
			}]
		}),
	})
})

export const {
	useGetOpenedDialogQuery,
	useEditOpenedDialogMessageDialogsMutation,
	useEditOpenedDialogMessageUsersMutation,
} = openedDialogApi