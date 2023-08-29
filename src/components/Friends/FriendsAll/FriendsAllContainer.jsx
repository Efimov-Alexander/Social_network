import FriendsAll from "./FriendsAll";
import React, { useState } from "react";
import { useGetFriendsAllQuery, useGetFriendsOnlineQuery } from "../../../redux/api/friends.api";

const FriendsAllContainer = () => {
	const [queryTerm, setQueryTerm] = useState("")
	const { data: all, isLoading: friendsAllIsLoading } = useGetFriendsAllQuery(queryTerm)
	const { data: online, isLoading: friendsOnlineIsLoading } = useGetFriendsOnlineQuery("")
	const isLoading = friendsAllIsLoading || friendsOnlineIsLoading


	return (<FriendsAll
		setQueryTerm={setQueryTerm}
		all={all}
		online={online}
		isLoading={isLoading} />)
}

export default FriendsAllContainer