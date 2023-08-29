import React, { useEffect, useState } from 'react'
import Info from './Info';
import { useEditProfileInfoMutation } from '../../../redux/api/profile.api';

const InfoContainer = ({ profile }) => {

	const [info, setInfo] = useState({
		description: null,
		dateOfBirth: null,
		city: null,
		education: null,
	})

	const [editProfileInfo] = useEditProfileInfoMutation()
	const [editMode, setEditMode] = useState(false)

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deActivateEditMode = () => {
		setEditMode(false)
		const newProfile = {
			...profile,
			info: {
				...profile.info,
				...info
			}
		}
		editProfileInfo(newProfile)
	}

	useEffect(() => {
		if (!profile) return
		setInfo({
			city: profile.info.city,
			dateOfBirth: profile.info.dateOfBirth,
			description: profile.info.description,
			education: profile.info.education,
		})
	}, [profile])

	return (
		<Info profile={profile}
			activateEditMode={activateEditMode}
			deActivateEditMode={deActivateEditMode}
			setInfo={setInfo}
			editMode={editMode}
			info={info} />
	)
}

export default InfoContainer
