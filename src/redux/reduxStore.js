import { applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import friendsReducer from './friendsReducer'
import openedDialogReducer from './openedDialogReducer'
import thunk from 'redux-thunk'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	openedDialogPage: openedDialogReducer,
	friendsPage: friendsReducer,
})


let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store