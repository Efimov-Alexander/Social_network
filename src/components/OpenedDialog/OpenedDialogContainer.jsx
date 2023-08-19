import { useDispatch, useSelector } from "react-redux";
import OpenedDialog from "./OpenedDialog";
import { sendMessage, getOpenedDilog } from "../../redux/openedDialog.slice";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OpenedDialogContainer = () => {

	const [messageText, setMessageText] = useState("")
	const { openedDialogId } = useParams()
	const { isLoading, dialog } = useSelector(state => state.reducers.openedDialogPage)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getOpenedDilog(openedDialogId))
	}, [openedDialogId])

	return (<OpenedDialog
		messageText={messageText}
		setMessageText={setMessageText}
		isLoading={isLoading}
		user={dialog} />)
}

export default OpenedDialogContainer