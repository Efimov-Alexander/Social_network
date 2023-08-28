import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'http://localhost:3001'
export const api = createApi({
	reducerPath: 'api',
	tagTypes: [
		'Applications',
		'Friends',
		'Dialogs',
		'Profile'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: builder => ({})
})
