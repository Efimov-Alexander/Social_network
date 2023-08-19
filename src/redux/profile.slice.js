import { createAsyncThunk, createImmutableStateInvariantMiddleware, createSlice } from "@reduxjs/toolkit";
import { profileAPI } from "../api/api";

const initialState = {
	profile: {
		info: {},
		posts: [],
	},
	isLoading: false
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

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getProfile.pending, (state) => {
				state.isLoading = true
			})
			.addCase(addPost.pending, (state) => {
				state.isLoading = true
			})
			.addCase(updateInfo.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getProfile.fulfilled, (state, action) => {
				state.profile = action.payload
				state.isLoading = false
			})
			.addCase(addPost.fulfilled, (state, action) => {
				state.profile = action.payload
				state.isLoading = false
			})
			.addCase(updateInfo.fulfilled, (state, action) => {
				state.profile.info.description = action.payload.info.description
				state.profile.info.education = action.payload.info.education
				state.profile.info.dateOfBirth = action.payload.info.dateOfBirth
				state.profile.info.city = action.payload.info.city
				state.isLoading = false
			})
	}
})
export const getProfile = createAsyncThunk('profile/getProfile',
	async userId => {
		return await profileAPI.getProfile(userId)
	})
export const addPost = createAsyncThunk('profile/addPost',
	async ({ profile, newPostText }) => {
		let newPost = {
			id: profile.posts.length + 1,
			avatar: "https://stoletovalarisa.ru/wp-content/uploads/2018/07/15094407318551944672_thumbnail_900x.jpg",
			text: newPostText,
			name: "Сергей Сергеев",
			date: getDateMonthTime(),
			img: "",
			countLikes: 0,
			countReposts: 0
		}
		return await profileAPI.putProfilePost(newPost, profile)
	})
export const updateInfo = createAsyncThunk('profile/updateInfo',
	async ({ info, profile }) => {
		return await profileAPI.putProfileInfo(info, profile)
	})

export const { setIsLoading, setUserProfile, setInfo } = profileSlice.actions

export default profileSlice.reducer