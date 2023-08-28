import OpenedDialog from "./OpenedDialog";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetOpenedDialogQuery } from "../../redux/api/openedDialog.api";

const OpenedDialogContainer = () => {

	const [messageText, setMessageText] = useState("")
	const { openedDialogId } = useParams()
	const { data: opendeDialog, isLoading } = useGetOpenedDialogQuery(openedDialogId)

	return (<OpenedDialog
		messageText={messageText}
		setMessageText={setMessageText}
		isLoading={isLoading}
		user={opendeDialog} />)
}

export default OpenedDialogContainer