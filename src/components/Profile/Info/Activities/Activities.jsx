import React from 'react'
import styles from './Activities.module.scss'

const Activities = ({ profile }) => {

	return (
		<div className={styles.activities_wrapper}>
			<div className={styles.activities_item}>
				<div>{profile.info.friendsCount}</div>
				<div>Друзья</div>
			</div>
			<div className={styles.activities_item}>
				<div>{profile.posts.length}</div>
				<div>Записи</div>
			</div>
		</div>
	)
}

export default Activities