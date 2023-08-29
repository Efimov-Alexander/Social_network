import styles from './InfoItems.module.scss'
import React from 'react'

const DateOfBirth = ({ dateOfBirth, ...props }) => {

	const onDateOfBirthChange = (e) => {
		const newDateOfBirth = e.currentTarget.value
		props.setInfo(prev => ({
			...prev,
			dateOfBirth: newDateOfBirth,
		}))
	}

	return (
		<div className={styles.info_item}>
			<div>Дата Рождения</div>
			{props.editMode ?
				<input
					className={styles.input}
					onChange={onDateOfBirthChange}
					value={dateOfBirth} />
				:
				<div>{dateOfBirth}</div>}
		</div>)
}

export default DateOfBirth