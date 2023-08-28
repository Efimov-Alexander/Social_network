import styles from './InfoItems.module.scss'
import React from 'react'

const City = ({info, ...props}) => {
	const onCityChange = (e) => {
		props.setInfo({
			...info,
			city: e.currentTarget.value
		})
	}

	return (
		<div className={styles.info_item}>
			<div >Город</div>
			{props.editMode ?
				<input
					className={styles.input}
					onChange={onCityChange}
					value={info.city} />
				:
				<div >{info.city}</div>}
		</div>)
}

export default City