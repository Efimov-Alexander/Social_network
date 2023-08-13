import { connect } from "react-redux";
import ApplicationsOutgoing from "./ApplicationsOutgoing";
import { cancelMyApplication, getApplications } from "../../../redux/friendsReducer"
import React, { useEffect } from "react";


const ApplicationsOutgoingContainer = (props) => {

	useEffect(() => {
		props.getApplications()
	}, [])

	return (
		<ApplicationsOutgoing
			applications={props.applications}
			isLoading={props.isLoading}
			cancelMyApplication={props.cancelMyApplication} />
	)
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.friendsPage.isLoading,
		applications: state.friendsPage.applications,
	}
}

export default connect(mapStateToProps, {
	cancelMyApplication,
	getApplications,
})(ApplicationsOutgoingContainer)

