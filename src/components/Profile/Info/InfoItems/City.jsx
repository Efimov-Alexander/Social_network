import styles from './InfoItems.module.scss'
import React from 'react'

const City = (props) => {

	const onCityChange = (e) => {
		props.setCity(e.currentTarget.value)
	}

	return (
		<div className={styles.info_item}>
			<div >Город</div>
			{props.editMode ?
				<input
					className={styles.input}
					onChange={onCityChange}
					value={props.city} />
				:
				<div >{props.city}</div>}
		</div>)
}

export default City