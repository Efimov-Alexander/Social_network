import FriendsAll from "./FriendsAll";
import React from "react";
import { useGetFriendsAllQuery, useGetFriendsOnlineQuery } from "../../../redux/api/friends.api";

const FriendsAllContainer = () => {

	const { data: all, isLoading: friendsAllIsLoading } = useGetFriendsAllQuery()
	const { data: online, isLoading: friendsOnlineIsLoading } = useGetFriendsOnlineQuery()
	const isLoading = friendsAllIsLoading || friendsOnlineIsLoading


	return (<FriendsAll
		all={all}
		online={online}
		isLoading={isLoading} />)
}

export default FriendsAllContainer