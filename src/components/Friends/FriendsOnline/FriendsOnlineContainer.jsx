import { useDispatch, useSelector } from "react-redux";
import FriendsOnline from "./FriendsOnline";
import React, { useEffect } from "react";
import { getFriends } from "../../../redux/friends.slice";

const FriendsOnlineContainer = () => {

	const dispatch = useDispatch()
	const { all, online } = useSelector(state => state.reducers.friendsPage.friends)
	const { isLoading } = useSelector(state => state.reducers.friendsPage)

	useEffect(() => {
		dispatch(getFriends())
	}, [])

	return (<FriendsOnline
		all={all}
		online={online}
		isLoading={isLoading} />)
}

export default FriendsOnlineContainer