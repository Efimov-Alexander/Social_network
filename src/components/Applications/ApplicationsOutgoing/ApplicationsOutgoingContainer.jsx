import ApplicationsOutgoing from "./ApplicationsOutgoing";
import React, { useState } from "react";
import { useGetApplicationsIncomingQuery, useGetApplicationsOutgoingQuery } from "../../../redux/api/applications.api";


const ApplicationsOutgoingContainer = () => {

	const [queryTerm, setQueryTerm] = useState("")
	const { data: incoming, isLoading: applicationsIsLoading } = useGetApplicationsIncomingQuery("")
	const { data: outgoing, isLoading: outgoingIsLoading } = useGetApplicationsOutgoingQuery(queryTerm)
	const isLoading = applicationsIsLoading || outgoingIsLoading

	return (
		<ApplicationsOutgoing
		setQueryTerm={setQueryTerm}
			incoming={incoming}
			outgoing={outgoing}
			isLoading={isLoading} />
	)
}

export default ApplicationsOutgoingContainer