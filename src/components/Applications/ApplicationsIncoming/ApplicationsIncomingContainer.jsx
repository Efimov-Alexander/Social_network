import ApplicationsIncoming from "./ApplicationsIncoming";
import React, { useState } from "react";
import { useGetApplicationsIncomingQuery, useGetApplicationsOutgoingQuery } from "../../../redux/api/applications.api";

const ApplicationsIncomingContainer = () => {
	const [queryTerm, setQueryTerm] = useState("")

	const { data: incoming, isLoading: applicationsIsLoading } = useGetApplicationsIncomingQuery(queryTerm)
	const { data: outgoing, isLoading: outgoingIsLoading } = useGetApplicationsOutgoingQuery("")
	const isLoading = applicationsIsLoading || outgoingIsLoading

	return (
		<ApplicationsIncoming
			setQueryTerm={setQueryTerm}
			incoming={incoming}
			outgoing={outgoing}
			isLoading={isLoading} />
	)
}

export default ApplicationsIncomingContainer