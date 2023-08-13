import { applicationsAPI, friendsAPI, profileAPI } from "../api/api"

let initialState = {
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

const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_IS_LOADING":
			return {
				...state,
				isLoading: action.isLoading
			}
		case "SET_APPLICATIONS_OUTGOING":
			return {
				...state,
				applications: {
					...state.applications,
					outgoing: [...action.users]
				}
			}
		case "SET_APPLICATIONS_INCOMING":
			return {
				...state,
				applications: {
					...state.applications,
					incoming: [...action.users]
				}
			}
		case "SET_FRIENDS_ALL":
			return {
				...state,
				friends: {
					...state.friends,
					all: [...action.users]
				}
			}
		case "SET_FRIENDS_ONLINE":
			return {
				...state,
				friends: {
					...state.friends,
					online: [...action.users]
				}
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
export const setFriendsAll = (users) => {
	return {
		type: "SET_FRIENDS_ALL",
		users: users,
	}
}
export const setFriendsOnline = (users) => {
	return {
		type: "SET_FRIENDS_ONLINE",
		users: users,
	}
}
export const setApplicationsOutgoing = (users) => {
	return {
		type: "SET_APPLICATIONS_OUTGOING",
		users: users,
	}
}
export const setApplicationsIncoming = (users) => {
	return {
		type: "SET_APPLICATIONS_INCOMING",
		users: users,
	}
}


export const cancelMyApplication = (id) => async dispatch => {
	dispatch(setIsLoading(true))
	await applicationsAPI.deleteApplicationOutgoing(id)
	const applicationsOutgoing = await applicationsAPI.getApplicationsOutgoing()
	dispatch(setApplicationsOutgoing(applicationsOutgoing))
	dispatch(setIsLoading(false))
}

export const getApplications = () => async dispatch => {
	dispatch(setIsLoading(true))
	const applicationsIncoming = await applicationsAPI.getApplicationsIncoming()
	dispatch(setApplicationsIncoming(applicationsIncoming))
	const applicationsOutgoing = await applicationsAPI.getApplicationsOutgoing()
	dispatch(setApplicationsOutgoing(applicationsOutgoing))
	dispatch(setIsLoading(false))
}

export const acceptSomeoneApplication = (user) => async dispatch => {
	dispatch(setIsLoading(true))
	if (user.info.online) { await friendsAPI.postFriendsOnline(user) }
	await friendsAPI.postFriendsAll(user)
	await applicationsAPI.deleteApplicationIncoming(user.id)
	const applicationsIncoming = await applicationsAPI.getApplicationsIncoming()
	dispatch(setApplicationsIncoming(applicationsIncoming))
	dispatch(setIsLoading(false))
}

export const getFriends = () => async dispatch => {
	dispatch(setIsLoading(true))
	const friendsAll = await friendsAPI.getFriendsAll()
	dispatch(setFriendsAll(friendsAll))
	const frinedsOnline = await friendsAPI.getFriendsOnline()
	dispatch(setFriendsOnline(frinedsOnline))
	dispatch(setIsLoading(false))
}

export const rejectSomeoneApplication = (id) => async dispatch => {
	dispatch(setIsLoading(true))
	await applicationsAPI.deleteApplicationIncoming(id)
	const applicationsIncoming = await applicationsAPI.getApplicationsIncoming()
	dispatch(setApplicationsIncoming(applicationsIncoming))
	dispatch(setIsLoading(false))
}

export default friendsReducer