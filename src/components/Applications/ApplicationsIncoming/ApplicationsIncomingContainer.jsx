import { useDispatch, useSelector } from "react-redux";
import ApplicationsIncoming from "./ApplicationsIncoming";
import React, { useEffect } from "react";
import { getApplications } from "../../../redux/friends.slice";

const ApplicationsIncomingContainer = () => {

	const { incoming, outgoing } = useSelector(state => state.reducers.friendsPage.applications)
	const { isLoading } = useSelector(state => state.reducers.friendsPage)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getApplications())
	}, [])

	return (
		<ApplicationsIncoming
			incoming={incoming}
			outgoing={outgoing}
			isLoading={isLoading} />
	)
}

export default ApplicationsIncomingContainer