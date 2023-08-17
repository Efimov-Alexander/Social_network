import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, addPost, updateInfo } from "../../redux/profileReducer";
import React, { useEffect } from "react";
import { compose } from 'redux'
import { withRouter } from "../../hoc/withRouter";

const ProfileContainer = (props) => {

	useEffect(() => {
		let profileId = props.params.profileId
		props.getProfile(profileId)
	}, [props.params.profileId])

	return (<Profile
		isLoading={props.isLoading}
		updateInfo={props.updateInfo}
		user={props.user}
		addPost={props.addPost} />)
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.profilePage.isLoading,
		user: state.profilePage.profile,
	}
}

export default compose(
	connect(mapStateToProps, {
		addPost,
		getProfile,
		updateInfo
	}),
	withRouter
)(ProfileContainer)