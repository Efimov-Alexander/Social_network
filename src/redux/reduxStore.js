import { combineReducers } from 'redux'
import profileReducer from './profile.slice'
import dialogsReducer from './dialogs.slice'
import friendsReducer from './friends.slice'
import openedDialogReducer from './openedDialog.slice'
import { configureStore } from '@reduxjs/toolkit'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	openedDialogPage: openedDialogReducer,
	friendsPage: friendsReducer,
})

let store = configureStore({
	reducer: { reducers }
})

window.store = store

export default store