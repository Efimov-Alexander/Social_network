import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { openedDialogAPI } from "../api/api"
import { addDialog } from "./dialogs.slice";

const initialState = {
	dialog: {
		id: 2,
		info: {
			name: "",
			avatar: "",
			online: false,
		},
		messages: [],
	},
	isLoading: false,
}

export const openedDialogSlice = createSlice({
	name: 'openedDialog',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getOpenedDilog.pending, (state) => {
				state.isLoading = true
			})
			.addCase(sendMessage.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getOpenedDilog.fulfilled, (state, action) => {
				state.dialog = action.payload
				state.isLoading = false
			})
			.addCase(sendMessage.fulfilled, (state, action) => {
				state.dialog = action.payload
				state.isLoading = false
			})
	}
})

const getTime = () => {
	let date = new Date()

	const addZero = (minutes) => {
		if (minutes < 10) {
			return `0${minutes}`
		} else return minutes
	}
	let time = `${date.getHours()}:${addZero(date.getMinutes())}`
	return (time)
}
export const getOpenedDilog = createAsyncThunk('openedDialog/getOpenedDilog',
	async openedDialogId => {
		return await openedDialogAPI.getOpenedDilog(openedDialogId)
	})
export const sendMessage = createAsyncThunk('openedDialog/sendMessage',
	async ({ messageText, user }, thunkAPI) => {
		if (user.messages.length === 0) { await thunkAPI.dispatch(addDialog(user)) }
		let newMessage = {
			id: user.messages.length + 1,
			avatar: "https://stoletovalarisa.ru/wp-content/uploads/2018/07/15094407318551944672_thumbnail_900x.jpg",
			message: messageText,
			date: getTime(),
			name: "Иванов Иван",
		}
		return await openedDialogAPI.putOpenedDialogMessage(newMessage, user)
	})

export default openedDialogSlice.reducer