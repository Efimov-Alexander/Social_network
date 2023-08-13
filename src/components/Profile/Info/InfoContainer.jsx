import { compose } from 'redux'
import { connect } from "react-redux";
import React, { useState, useEffect } from 'react'
import { updateInfo } from '../../../redux/profileReducer'
import Info from './Info';

const InfoContainer = ({ user, ...props }) => {

	const [editMode, setEditMode] = useState(false)
	const [city, setCity] = useState(user.info.city)
	const [dateOfBirth, setDateOfBirth] = useState(user.info.dateOfBirth)
	const [description, setDescription] = useState(user.info.description)
	const [education, setEducation] = useState(user.info.education)

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deActivateEditMode = () => {
		setEditMode(false)
		props.updateInfo({
			editMode,
			city,
			dateOfBirth,
			description,
			education
		}, user)
	}

	useEffect(() => {
		setCity(user.info.city)
		setDateOfBirth(user.info.dateOfBirth)
		setDescription(user.info.description)
		setEducation(user.info.education)
	}, [user.info])

	return (
		<Info
			user={user}
			activateEditMode={activateEditMode}
			deActivateEditMode={deActivateEditMode}
			setInfo={{ setEditMode, setCity, setDateOfBirth, setDescription, setEducation }}
			info={{ editMode, city, dateOfBirth, description, education }} />
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.profilePage.profile,
	}
}

export default compose(
	connect(mapStateToProps, { updateInfo }),
)(InfoContainer)
