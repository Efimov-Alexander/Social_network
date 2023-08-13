import styles from './InfoItems.module.scss'
import React from 'react'

const Description = (props) => {

	const onDescriptionChange = (e) => {
		let newDescription = e.currentTarget.value
		props.setDescription(newDescription,)
	}

	return (
		<div className={styles.info_item}>
			<div >О себе</div>
			{props.editMode ?
				<input
					className={styles.input}
					onChange={onDescriptionChange}
					value={props.description} />
				:
				<div >{props.description}</div>}
		</div>)
}

export default Description