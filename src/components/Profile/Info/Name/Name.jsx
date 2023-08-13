import React from 'react'
import styles from './Name.module.scss'
export const Name = ({user}) => {

	return (
		<div className={styles.name_wrapper}>
			<h2 className={styles.name}>{user.info.name}</h2>
			{user.info.online ?
				<div className={styles.status_online}>В сети</div>
				:
				<div className={styles.status_ofline}>Не в сети</div>}
		</div>
	)
}