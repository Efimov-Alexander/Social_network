import styles from './InfoItems.module.scss'
import React from 'react'

const City = ({ city, ...props }) => {
	
	const onCityChange = (e) => {
		const newCity = e.currentTarget.value
		props.setInfo(prev => ({
			...prev,
			city: newCity,
		}))
	}


	return (
		<div className={styles.info_item}>
			<div >Город</div>
			{props.editMode ?
				<input
					className={styles.input}
					onChange={onCityChange}
					value={city} />
				:
				<div >{city}</div>}
		</div>)
}

export default City