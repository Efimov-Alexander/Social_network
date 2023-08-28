import React from 'react'
import styles from './Activities.module.scss'

const Activities = ({ profile }) => {

	return (
		<div className={styles.activities_wrapper}>
			<div className={styles.activities_item}>
				<div>{profile ? profile.info.friendsCount : null}</div>
				<div>Друзья</div>
			</div>
			<div className={styles.activities_item}>
				<div>{profile ? profile.posts.length : null}</div>
				<div>Записи</div>
			</div>
		</div>
	)
}

export default Activities