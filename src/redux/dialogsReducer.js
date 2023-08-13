import { dialogsAPI } from "../api/api"

let initialState = {
	dialogs: [],
	isLoading: false
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_IS_LOADING":
			return {
				...state,
				isLoading: action.isLoading
			}
		case "SET_DIALOGS":
			return {
				...state,
				dialogs: action.data
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
export const setDialogs = (dialogs) => {
	return {
		type: "SET_DIALOGS",
		data: dialogs
	}
}


export const getDialogs = () => async dispatch => {
	dispatch(setIsLoading(true))
	const dialogs = await dialogsAPI.getDialogs()
	dispatch(setDialogs(dialogs))
	dispatch(setIsLoading(false))
}
export const addDialog = user => async dispatch => {
	dispatch(setIsLoading(true))
	await dialogsAPI.addDialog(user)
	dispatch(setIsLoading(false))
}


export default dialogsReducer
