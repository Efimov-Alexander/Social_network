import FriendsOnline from "./FriendsOnline";
import React from "react";
import { useGetFriendsAllQuery, useGetFriendsOnlineQuery } from "../../../redux/api/friends.api";

const FriendsOnlineContainer = () => {

	const { data: all, isLoading: friendsAllIsLoading } = useGetFriendsAllQuery()
	const { data: online, isLoading: friendsOnlineIsLoading } = useGetFriendsOnlineQuery()
	const isLoading = friendsAllIsLoading || friendsOnlineIsLoading

	return (<FriendsOnline
		all={all}
		online={online}
		isLoading={isLoading} />)
}

export default FriendsOnlineContainer