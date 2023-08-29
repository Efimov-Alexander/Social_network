import FriendsOnline from "./FriendsOnline";
import React, { useState } from "react";
import { useGetFriendsAllQuery, useGetFriendsOnlineQuery } from "../../../redux/api/friends.api";

const FriendsOnlineContainer = () => {
	const [queryTerm, setQueryTerm] = useState("")

	const { data: all, isLoading: friendsAllIsLoading } = useGetFriendsAllQuery("")
	const { data: online, isLoading: friendsOnlineIsLoading } = useGetFriendsOnlineQuery(queryTerm)
	const isLoading = friendsAllIsLoading || friendsOnlineIsLoading

	return (<FriendsOnline
		setQueryTerm={setQueryTerm}
		all={all}
		online={online}
		isLoading={isLoading} />)
}

export default FriendsOnlineContainer