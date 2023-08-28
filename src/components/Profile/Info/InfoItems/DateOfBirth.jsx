import styles from './InfoItems.module.scss'
import React from 'react'

const DateOfBirth = ({info, ...props}) => {

	const onDateOfBirthChange = (e) => {
		props.setInfo({
			...info,
			dateOfBirth: e.currentTarget.value
		})
	}

	return (
		<div className={styles.info_item}>
			<div>Дата Рождения</div>
			{props.editMode ?
				<input
					className={styles.input}
					onChange={onDateOfBirthChange}
					value={info.dateOfBirth} />
				:
				<div>{info.dateOfBirth}</div>}
		</div>)
}

export default DateOfBirth