import { connect } from "react-redux";
import FriendsAll from "./FriendsAll";
import { getFriends } from "../../../redux/friendsReducer";
import React, { useEffect } from "react";

const FriendsAllContainer = (props) => {

	useEffect(() => {
		props.getFriends()
	}, [])

	return (<FriendsAll
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
})(FriendsAllContainer)