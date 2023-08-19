import FriendsAll from "./FriendsAll";
import { getFriends } from "../../../redux/friends.slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FriendsAllContainer = () => {
	const { all, online } = useSelector(state => state.reducers.friendsPage.friends)
	const { isLoading } = useSelector(state => state.reducers.friendsPage)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getFriends())
	}, [])

	return (<FriendsAll
		all={all}
		online={online}
		isLoading={isLoading} />)
}

export default FriendsAllContainer