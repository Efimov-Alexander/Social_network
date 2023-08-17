import { connect } from "react-redux";
import OpenedDialog from "./OpenedDialog";
import { addDialog } from "../../redux/dialogsReducer"
import { sendMessage, getOpenedDilog } from "../../redux/openedDialogReducer";
import React, { useEffect, useState } from "react";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";

const OpenedDialogContainer = (props) => {

	const [messageText, setMessageText] = useState("")
	let openedDialogId = props.params.openedDialogId


	useEffect(() => {
		if (!openedDialogId) return
		props.getOpenedDilog(openedDialogId)
	}, [openedDialogId])


	return (<OpenedDialog
		messageText={messageText}
		setMessageText={setMessageText}
		isLoading={props.isLoading}
		user={props.user}
		sendMessage={props.sendMessage} />)
}

const mapStateToProps = state => {
	return {
		isLoading: state.openedDialogPage.isLoading,
		user: state.openedDialogPage.dialog
	}
}

export default compose(
	connect(mapStateToProps, {
		sendMessage,
		getOpenedDilog,
		addDialog,
	}),
	withRouter
)(OpenedDialogContainer)