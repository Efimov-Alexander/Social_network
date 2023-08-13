import axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3001/'
})

export const applicationsAPI = {
	getApplicationIncoming: async (userId) => {
		const response = await instance
			.get(`applicationsIncoming/${userId}`)
		return response.data
	},
	getApplicationsIncoming: async () => {
		const response = await instance
			.get(`applicationsIncoming`)
		return response.data
	},
	getApplicationsOutgoing: async () => {
		const response = await instance
			.get(`applicationsOutgoing`)
		return response.data
	},
	deleteApplicationIncoming(userId) {
		return instance.delete(`applicationsIncoming/${userId}`)

	},
	deleteApplicationOutgoing(userId) {
		return instance.delete(`applicationsOutgoing/${userId}`)
	},
}

export const friendsAPI = {
	postFriendsOnline(data) {
		return instance.post(`friendsOnline`, { ...data })
	},
	postFriendsAll(data) {
		return instance.post(`friendsAll`, { ...data })
	},
	getFriendsAll: async () => {
		const response = await instance.get(`friendsAll`)
		return response.data
	},
	getFriendsOnline: async () => {
		const response = await instance.get(`friendsOnline`)
		return response.data
	}
}

export const profileAPI = {
	getProfile: async (userId) => {
		const response = await instance
			.get(`users/${userId}`)
		return response.data
	},
	putProfileInfo: async (newInfo, user) => {
		const response = await instance
			.put(`users/${user.id}`,
				{ ...user, info: { ...user.info, ...newInfo, } })
		return response.data
	},
	putProfilePost: async (post, user) => {
		const response = await instance
			.put(`users/${user.id}`, {
				...user,
				posts: [post, ...user.posts],
				newPostText: ""
			})
		return response.data
	}
}

export const openedDialogAPI = {
	getOpenedDilog: async (userId) => {
		const response = await instance
			.get(`users/${userId}`)
		return response.data
	},
	putOpenedDialogMessage: async (newMessage, user) => {
		await instance
			.put(`dialogs/${user.id}`, {
				...user,
				messages: [...user.messages, newMessage]
			})
		const response = await instance
			.put(`users/${user.id}`, {
				...user,
				messages: [...user.messages, newMessage]
			})
		return response.data
	},
}

export const dialogsAPI = {
	getDialogs: async () => {
		const response = await instance.get("dialogs")
		return response.data
	},
	addDialog: async (user) => {
		return instance.post(`dialogs`, { ...user })
	},
	// sortDialogs: async () => {
	// 	const dialogs = await instance.get('dialogs')
	// 	dialogs.sort()
	// }
}

