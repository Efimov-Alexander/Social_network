import { connect } from "react-redux";
import ApplicationsIncoming from "./ApplicationsIncoming";
import {
	acceptSomeoneApplication,
	rejectSomeoneApplication,
	getApplications,
} from "../../../redux/friendsReducer";
import React, { useEffect } from "react";

const ApplicationsIncomingContainer = (props) => {
	useEffect(() => {
		props.getApplications()
	}, [])

	return (
		<ApplicationsIncoming
			applications={props.applications}
			isLoading={props.isLoading}
			acceptSomeoneApplication={props.acceptSomeoneApplication}
			rejectSomeoneApplication={props.rejectSomeoneApplication}
		/>
	)
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.friendsPage.isLoading,
		applications: state.friendsPage.applications,
	}
}

export default connect(mapStateToProps, {
	acceptSomeoneApplication,
	rejectSomeoneApplication,
	getApplications,
})(ApplicationsIncomingContainer)

