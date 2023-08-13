import { dialogsAPI, openedDialogAPI } from "../api/api"
import { addDialog } from "./dialogsReducer"

let initialState = {
	dialog: {
		id: 2,
		info: {
			name: "",
			avatar: "",
			online: false,
		},
		messages: [],
		isLoading: false,
	}
}

let getTime = () => {
	let date = new Date()

	const addZero = (minutes) => {
		if (minutes < 10) {
			return `0${minutes}`
		} else return minutes
	}
	let time = `${date.getHours()}:${addZero(date.getMinutes())}`
	return (time)
}

const openedDialogReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SEND_MESSAGE":
			let newMessage = {
				id: action.messageId,
				avatar: "https://stoletovalarisa.ru/wp-content/uploads/2018/07/15094407318551944672_thumbnail_900x.jpg",
				message: action.messageText,
				date: getTime(),
				name: "Иванов Иван",
			}
			return {
				...state,
				dialog: {
					...state.dialog,
					messages: [...state.dialog.messages, newMessage],
				},
			}
		case "SET_OPENED_DIALOG":
			return {
				...state,
				dialog: action.data
			}
		case "SET_IS_LOADING":
			return {
				...state,
				isLoading: action.isLoading
			}
		default:
			return state
	}
}
export const setIsLoading = (isLoading) => {
	return {
		type: "SET_IS_LOADING",
		isLoading: isLoading,
	}
}
export const setOpenedDialog = (data) => {
	return {
		type: "SET_OPENED_DIALOG",
		data
	}
}


export const getOpenedDilog = (openedDialogId) => async (dispatch) => {
	dispatch(setIsLoading(true))
	const openedDialog = await openedDialogAPI.getOpenedDilog(openedDialogId)
	dispatch(setOpenedDialog(openedDialog))
	dispatch(setIsLoading(false))
}
export const sendMessage = (messageText, user, setMessageText) => async (dispatch) => {
	dispatch(setIsLoading(true))
	if (user.messages.length === 0) { await dispatch(addDialog(user)) }
	let newMessage = {
		id: user.messages.length + 1,
		avatar: "https://stoletovalarisa.ru/wp-content/uploads/2018/07/15094407318551944672_thumbnail_900x.jpg",
		message: messageText,
		date: getTime(),
		name: "Иванов Иван",
	}
	const openedDialog = await openedDialogAPI.putOpenedDialogMessage(newMessage, user)
	dispatch(setOpenedDialog(openedDialog))
	// await dialogsAPI.sort
	setMessageText("")
	dispatch(setIsLoading(false))
}
export default openedDialogReducer
