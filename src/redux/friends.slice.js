import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { applicationsAPI, friendsAPI } from "../api/api";

const initialState = {
	friends: {
		all: [],
		online: [],
	},
	applications: {
		incoming: [],
		outgoing: [],
	},
	isLoading: false
}

export const friendsSlice = createSlice({
	name: 'friends',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(cancelMyApplication.pending, (state, action) => {
				state.isLoading = true
			})
			.addCase(getFriends.pending, (state, action) => {
				state.isLoading = true
			})
			.addCase(getApplications.pending, (state, action) => {
				state.isLoading = true
			})
			.addCase(rejectSomeoneApplication.pending, (state, action) => {
				state.isLoading = true
			})
			.addCase(acceptSomeoneApplication.pending, (state, action) => {
				state.isLoading = true
			})
			.addCase(cancelMyApplication.fulfilled, (state, action) => {
				state.applications.outgoing = action.payload
				state.isLoading = false
			})
			.addCase(getFriends.fulfilled, (state, action) => {
				state.friends.all = action.payload.friendsAll
				state.friends.online = action.payload.friendsOnline
				state.isLoading = false
			})
			.addCase(getApplications.fulfilled, (state, action) => {
				state.applications.incoming = action.payload.applicationsIncoming
				state.applications.outgoing = action.payload.applicationsOutgoing
				state.isLoading = false
			})
			.addCase(acceptSomeoneApplication.fulfilled, (state, action) => {
				state.applications.incoming = action.payload
				state.isLoading = false
			})
			.addCase(rejectSomeoneApplication.fulfilled, (state, action) => {
				state.applications.incoming = action.payload
				state.isLoading = false
			})
	},
})

export const acceptSomeoneApplication = createAsyncThunk('friends/acceptSomeoneApplication',
	async user => {
		if (user.info.online) { await friendsAPI.postFriendsOnline(user) }
		await friendsAPI.postFriendsAll(user)
		await applicationsAPI.deleteApplicationIncoming(user.id)
		return await applicationsAPI.getApplicationsIncoming()
	})
export const rejectSomeoneApplication = createAsyncThunk('friends/rejectSomeoneApplication',
	async id => {
		await applicationsAPI.deleteApplicationIncoming(id)
		return await applicationsAPI.getApplicationsIncoming()
	})
export const getApplications = createAsyncThunk('friends/getApplications',
	async () => {
		const applicationsIncoming = await applicationsAPI.getApplicationsIncoming()
		const applicationsOutgoing = await applicationsAPI.getApplicationsOutgoing()
		return { applicationsIncoming, applicationsOutgoing }
	})
export const getFriends = createAsyncThunk('friends/getFriends',
	async () => {
		const friendsAll = await friendsAPI.getFriendsAll()
		const friendsOnline = await friendsAPI.getFriendsOnline()
		return { friendsAll, friendsOnline }
	})
export const cancelMyApplication = createAsyncThunk('friends/cancelMyApplication',
	async id => {
		await applicationsAPI.deleteApplicationOutgoing(id)
		return await applicationsAPI.getApplicationsOutgoing()
	})

export default friendsSlice.reducer