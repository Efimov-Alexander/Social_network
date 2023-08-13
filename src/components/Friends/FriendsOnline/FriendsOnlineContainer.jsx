import { connect } from "react-redux";
import FriendsOnline from "./FriendsOnline";
import { getFriends } from "../../../redux/friendsReducer";
import React, { useEffect } from "react";

const FriendsOnlineContainer = (props) => {

	useEffect(() => {
		props.getFriends()
	}, [])

	return (<FriendsOnline
		friends={props.friends}
		isLoading={props.isLoading} />)
}

const mapStateToProps = (state) => {
	return {
		friends: state.friendsPage.friends,
		isLoading: state.friendsPage.isLoading
	}
}

export default connect(mapStateToProps, {
	getFriends,
})(FriendsOnlineContainer)