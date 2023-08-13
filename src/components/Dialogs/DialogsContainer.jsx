import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import React, { useEffect } from "react";
import { getDialogs } from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {

	useEffect(() => {
		props.getDialogs()
	}, [])

	return <Dialogs
		isLoading={props.isLoading}
		dialogs={props.dialogs} />
}
const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		isLoading: state.dialogsPage.isLoading,
	}
}

export default connect(mapStateToProps, {
	getDialogs,
})(DialogsContainer)