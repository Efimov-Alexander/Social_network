import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "../../redux/profile.slice";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProfileContainer = () => {

	const { isLoading, profile } = useSelector(state => state.reducers.profilePage)
	const dispatch = useDispatch()
	const { profileId } = useParams()

	useEffect(() => {
		dispatch(getProfile(profileId))
	}, [profileId])

	return (<Profile
		isLoading={isLoading}
		profile={profile} />)
}

export default ProfileContainer