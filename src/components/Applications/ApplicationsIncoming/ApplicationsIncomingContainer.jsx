import ApplicationsIncoming from "./ApplicationsIncoming";
import React from "react";
import { useGetApplicationsIncomingQuery, useGetApplicationsOutgoingQuery } from "../../../redux/api/applications.api";

const ApplicationsIncomingContainer = () => {
	const { data: incoming, isLoading: applicationsIsLoading } = useGetApplicationsIncomingQuery()
	const { data: outgoing, isLoading: outgoingIsLoading } = useGetApplicationsOutgoingQuery()
	const isLoading = applicationsIsLoading || outgoingIsLoading

	return (
		<ApplicationsIncoming
			incoming={incoming}
			outgoing={outgoing}
			isLoading={isLoading} />
	)
}

export default ApplicationsIncomingContainer