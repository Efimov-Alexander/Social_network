import styles from './InfoItems.module.scss'
import React from 'react'

const Description = ({ description, ...props }) => {

	const onDescriptionChange = (e) => {
		const newDescription = e.currentTarget.value
		props.setInfo(prev => ({
			...prev,
			description: newDescription,
		}))
	}

	return (
		<div className={styles.info_item}>
			<div >О себе</div>
			{props.editMode ?
				<input
					className={styles.input}
					onChange={onDescriptionChange}
					value={description} />
				:
				<div >{description}</div>}
		</div>)
}

export default Description