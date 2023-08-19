import React from 'react'
import styles from './Name.module.scss'
export const Name = ({profile}) => {

	return (
		<div className={styles.name_wrapper}>
			<h2 className={styles.name}>{"profile.info.name"}</h2>
			{/* {profile.info.online ?
				<div className={styles.status_online}>В сети</div>
				:
				<div className={styles.status_ofline}>Не в сети</div>} */}
		</div>
	)
}