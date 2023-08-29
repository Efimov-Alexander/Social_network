import styles from './InfoItems.module.scss'
import React from 'react'

const Education = ({ education, ...props }) => {

	const onEducationChange = (e) => {
		const newEducation = e.currentTarget.value
		props.setInfo(prev => ({
			...prev,
			education: newEducation,
		}))
	}
	return (
		<div className={styles.info_item}>
			<div >Образование</div>
			{props.editMode ?
				<input
					className={styles.input}
					onChange={onEducationChange}
					value={education} />
				:
				<div >{education}</div>}
		</div>)
}

export default Education