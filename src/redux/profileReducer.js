import { profileAPI, friendsAPI } from "../api/api"

let initialState = {
	profile: {
		id: 0,
		info: {
			avatar: "",
			name: "",
			online: false,
			dateOfBirth: "",
			city: "",
			education: "",
			friendsCount: "",
		},
		posts: [],
		isLodaing: false
	}
}

const getDateMonthTime = () => {
	let date = new Date()
	const detectionMonth = () => {
		let month = date.getMonth()
		switch (month) {
			case 0:
				return "Январь"
			case 1:
				return "Февраль"
			case 2:
				return "Март"
			case 3:
				return "Апрель"
			case 4:
				return "Май"
			case 5:
				return "Июнь"
			case 6:
				return "Июль"
			case 7:
				return "Август"
			case 8:
				return "Сентябрь"
			case 9:
				return "Октябрь"
			case 10:
				return "Ноябрь"
			case 11:
				return "Декабрь"
			case 11:
				return "Январь"
		}
	}
	const addZero = (minutes) => {
		if (minutes < 10) {
			return `0${minutes}`
		} else return minutes
	}
	let time = `${date.getDate()} ${detectionMonth()} ${date.getHours()}:${addZero(date.getMinutes())}`
	return (time)
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_USER_PROFILE":
			return {
				...state,
				profile: action.data
			}
		case "SET_INFO":
			return {
				...state,
				profile: {
					...state.profile,
					info: {
						...state.profile.info,
						description: action.description,
						education: action.education,
						dateOfBirth: action.dateOfBirth,
						city: action.city,
					}
				}
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
export const setUserProfile = (data) => {
	return {
		type: "SET_USER_PROFILE",
		data
	}
}
export const setInfo = (info) => {
	return {
		type: "SET_INFO",
		education: info.education,
		description: info.description,
		dateOfBirth: info.dateOfBirth,
		city: info.city,
	}
}


export const getProfile = (userId) => async dispatch => {
	dispatch(setIsLoading(true))
	const profileData = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(profileData))
	dispatch(setIsLoading(false))
}
export const addPost = (user, newPostText) => async dispatch => {
	dispatch(setIsLoading(true))
	let newPost = {
		id: user.posts.length + 1,
		avatar: "https://stoletovalarisa.ru/wp-content/uploads/2018/07/15094407318551944672_thumbnail_900x.jpg",
		text: newPostText,
		name: "Сергей Сергеев",
		date: getDateMonthTime(),
		img: "",
		countLikes: 0,
		countReposts: 0
	}
	const profile = await profileAPI.putProfilePost(newPost, user)
	dispatch(setUserProfile(profile))
	dispatch(setIsLoading(false))
}
export const updateInfo = (info, user) => async dispatch => {
	dispatch(setIsLoading(true))
	const profile = await profileAPI.putProfileInfo(info, user)
	dispatch(setInfo(profile.info))
	dispatch(setIsLoading(false))
}

export default profileReducer