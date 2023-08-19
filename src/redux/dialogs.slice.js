import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dialogsAPI } from "../api/api";

export const dialogsSlice = createSlice({
	name: 'dialogs',
	initialState: { dialogs: [], isLoading: false },
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(addDialog.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getDialogs.pending, (state) => {
				state.isLoading = true
			})
			.addCase(addDialog.fulfilled, (state) => {
				state.isLoading = false
			})
			.addCase(getDialogs.fulfilled, (state, action) => {
				state.dialogs = action.payload
				state.isLoading = false
			})
	}
})

export const addDialog = createAsyncThunk('dialogs/addDialog',
	async user => {
		await dialogsAPI.addDialog(user)
	})

export const getDialogs = createAsyncThunk('dialogs/getDialogs',
	async () => {
		return await dialogsAPI.getDialogs()
	})

export default dialogsSlice.reducer