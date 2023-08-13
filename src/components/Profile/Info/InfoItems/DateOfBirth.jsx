import styles from './InfoItems.module.scss'
import React from 'react'

const DateOfBirth = (props) => {

	const onDateOfBirthChange = (e) => {
		let newDateOfBirth = e.currentTarget.value
		props.setDateOfBirth(newDateOfBirth)
	}

	return (
		<div className={styles.info_item}>
			<div>Дата Рождения</div>
			{props.editMode ?
				<input
					className={styles.input}
					onChange={onDateOfBirthChange}
					value={props.dateOfBirth} />
				:
				<div>{props.dateOfBirth}</div>}
		</div>)
}

export default DateOfBirth