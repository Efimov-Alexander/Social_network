import { useDispatch } from "react-redux";
import Dialogs from "./Dialogs";
import React, { useEffect } from "react";
import { getDialogs } from "../../redux/dialogs.slice";
import { useSelector } from "react-redux";


const DialogsContainer = () => {
	
	const { isLoading, dialogs } = useSelector(state => state.reducers.dialogsPage)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getDialogs())
	}, [])

	return <Dialogs
		isLoading={isLoading}
		dialogs={dialogs} />
}

export default DialogsContainer