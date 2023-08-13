import styles from './InfoItems.module.scss'
import React from 'react'

const Education = (props) => {

	const onEducationChange = (e) => {
		let newEducation = e.currentTarget.value
		props.setEducation(newEducation)
	}

	return (
		<div className={styles.info_item}>
			<div >Образование</div>
			{props.editMode ?
				<input
					className={styles.input}
					onChange={onEducationChange}
					value={props.education} />
				:
				<div >{props.education}</div>}
		</div>)
}

export default Education