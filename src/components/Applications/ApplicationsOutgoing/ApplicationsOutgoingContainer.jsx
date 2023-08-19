import { useDispatch, useSelector } from "react-redux";
import ApplicationsOutgoing from "./ApplicationsOutgoing";
import React, { useEffect } from "react";
import { getApplications } from "../../../redux/friends.slice";


const ApplicationsOutgoingContainer = () => {

	const { incoming, outgoing } = useSelector(state => state.reducers.friendsPage.applications)
	const { isLoading } = useSelector(state => state.reducers.friendsPage)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getApplications())
	}, [])

	return (
		<ApplicationsOutgoing
			incoming={incoming}
			outgoing={outgoing}
			isLoading={isLoading} />
	)
}

export default ApplicationsOutgoingContainer