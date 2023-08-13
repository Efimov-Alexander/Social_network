import styles from './User.module.scss'

const User = ({ user }) => {
	return (
		<div className={styles.body}>
			<div className={styles.avatar_name_wrapper}>
				<div className={styles.avatar_wrapper}>
					<img src={user.avatar} alt="Avatar" />
				</div>
				<div className={styles.name_wrapper}>
					<div className={styles.name}>{user.name}</div>
					<div className={styles.message}>{user.message}</div>
				</div>
			</div>
			<div className={styles.date}>{user.date}</div>
		</div>
	)
}

export default User