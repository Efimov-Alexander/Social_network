import styles from './InfoItems.module.scss'
import React from 'react'

const Description = ({ info, ...props }) => {

	const onDescriptionChange = (e) => {
		props.setInfo({
			...info,
			description: e.currentTarget.value
		})
	}

	return (
		<div className={styles.info_item}>
			<div >О себе</div>
			{props.editMode ?
				<input
					className={styles.input}
					onChange={onDescriptionChange}
					value={info.description} />
				:
				<div >{info.description}</div>}
		</div>)
}

export default Description