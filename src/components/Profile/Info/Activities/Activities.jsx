import React from 'react'
import styles from './Activities.module.scss'

const Activities = ({ user }) => {

	return (
		<div className={styles.activities_wrapper}>
			<div className={styles.activities_item}>
				<div>{user.info.friendsCount}</div>
				<div>Друзья</div>
			</div>
			<div className={styles.activities_item}>
				<div>{user.posts.length}</div>
				<div>Записи</div>
			</div>
		</div>
	)
}

export default Activities