import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import { createLogger } from 'redux-logger'

const logger = createLogger({
	collapsed: true,
})

const reducers = combineReducers({
	[api.reducerPath]: api.reducer,
})


export const store = configureStore({
	reducer: reducers,
	middleware: (GetDefaultMiddleware) => GetDefaultMiddleware()
		.concat(api.middleware)
		.concat(logger)
})

window.store = store

export default store