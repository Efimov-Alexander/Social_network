import React from 'react'
import styles from './Name.module.scss'
export const Name = ({ profile }) => {

	return (
		<div className={styles.name_wrapper}>
			<h2 className={styles.name}>{profile ? profile.info.name : null}</h2>
			{profile ? profile.info.online ?
				<div className={styles.status_online}>В сети</div>
				:
				<div className={styles.status_ofline}>Не в сети</div> : null}
		</div>
	)
}