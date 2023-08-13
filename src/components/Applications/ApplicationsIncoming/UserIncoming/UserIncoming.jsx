import styles from './UserIncoming.module.scss'
import { NavLink } from 'react-router-dom'

const UserIncoming = ({ user, ...props }) => {

	const onAcceptSomeoneApplication = () => { props.acceptSomeoneApplication(user) }

	const onRejectSomeoneApplication = () => { props.rejectSomeoneApplication(user.id) }

	return (
		<div className={styles.wrapper}>
			<div className={styles.avatar_wrapper}>
				<NavLink to={`/profile/${user.id}`}>
					<img src={user.info.avatar} alt="Avatar" />
				</NavLink>
				{user.info.online === true && <div className={styles.online_true}><span></span></div>}
			</div>
			<div className={styles.info_wrapper}>
				<div className={styles.name}>{user.info.name}</div>
				<div className={styles.description}>{user.info.description}</div>
				<div className={styles.actions}>
					<button
						onClick={onAcceptSomeoneApplication}
						className={`${styles.accept_button} _button-blue`}>Принять заявку</button>
					<button
						onClick={onRejectSomeoneApplication}
						className={`${styles.cancel_button} _button-grey`}>Отклонить заявку</button>
				</div>
			</div>
		</div>
	)
}

export default UserIncoming