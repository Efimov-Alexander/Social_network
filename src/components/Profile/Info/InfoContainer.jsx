import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from 'react'
import { updateInfo } from '../../../redux/profile.slice'
import Info from './Info';

const InfoContainer = () => {
	const { profile } = useSelector(state => state.reducers.profilePage)
	const dispatch = useDispatch()
	const [editMode, setEditMode] = useState(false)
	const [city, setCity] = useState(profile.info.city)
	const [dateOfBirth, setDateOfBirth] = useState(profile.info.dateOfBirth)
	const [description, setDescription] = useState(profile.info.description)
	const [education, setEducation] = useState(profile.info.education)

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deActivateEditMode = () => {
		setEditMode(false)
		dispatch(updateInfo({
			info: {
				editMode,
				city,
				dateOfBirth,
				description,
				education
			},
			profile
		}))
	}

	useEffect(() => {
		setCity(profile.info.city)
		setDateOfBirth(profile.info.dateOfBirth)
		setDescription(profile.info.description)
		setEducation(profile.info.education)
	}, [profile.info])

	return (
		<Info
			profile={profile}
			activateEditMode={activateEditMode}
			deActivateEditMode={deActivateEditMode}
			setInfo={{ setEditMode, setCity, setDateOfBirth, setDescription, setEducation }}
			info={{ editMode, city, dateOfBirth, description, education }} />
	)
}

export default InfoContainer
