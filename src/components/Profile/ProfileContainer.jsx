import Profile from "./Profile";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetProfileQuery } from "../../redux/api/profile.api";

const ProfileContainer = () => {
	const { profileId } = useParams()
	const { data: profile, isLoading } = useGetProfileQuery(profileId)

	return (<Profile
		isLoading={isLoading}
		profile={profile} />)
}

export default ProfileContainer