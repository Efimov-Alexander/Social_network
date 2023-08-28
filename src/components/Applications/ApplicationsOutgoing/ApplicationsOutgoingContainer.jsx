import ApplicationsOutgoing from "./ApplicationsOutgoing";
import React from "react";
import { useGetApplicationsIncomingQuery, useGetApplicationsOutgoingQuery } from "../../../redux/api/applications.api";


const ApplicationsOutgoingContainer = () => {
	const { data: incoming, isLoading: applicationsIsLoading } = useGetApplicationsIncomingQuery()
	const { data: outgoing, isLoading: outgoingIsLoading } = useGetApplicationsOutgoingQuery()
	const isLoading = applicationsIsLoading || outgoingIsLoading

	return (
		<ApplicationsOutgoing
			incoming={incoming}
			outgoing={outgoing}
			isLoading={isLoading} />
	)
}

export default ApplicationsOutgoingContainer