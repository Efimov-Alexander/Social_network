import styles from './InfoItems.module.scss'
import React from 'react'

const Education = ({ info, ...props }) => {

	const onEducationChange = (e) => {
		props.setInfo({
			...info,
			education: e.currentTarget.value
		})
	}

	return (
		<div className={styles.info_item}>
			<div >Образование</div>
			{props.editMode ?
				<input
					className={styles.input}
					onChange={onEducationChange}
					value={info.education} />
				:
				<div >{info.education}</div>}
		</div>)
}

export default Education