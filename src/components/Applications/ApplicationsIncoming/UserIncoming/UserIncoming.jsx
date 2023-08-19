import { useDispatch } from 'react-redux'
import styles from './UserIncoming.module.scss'
import { Link } from 'react-router-dom'
import { acceptSomeoneApplication, rejectSomeoneApplication } from '../../../../redux/friends.slice'

const UserIncoming = ({ user }) => {
	const dispatch = useDispatch()

	return (
		<div className={styles.wrapper}>
			<div className={styles.avatar_wrapper}>
				<Link to={`/profile/${user.id}`}>
					<img src={user.info.avatar} alt="Avatar" />
				</Link>
				{user.info.online === true && <div className={styles.online_true}><span></span></div>}
			</div>
			<div className={styles.info_wrapper}>
				<div className={styles.name}>{user.info.name}</div>
				<div className={styles.description}>{user.info.description}</div>
				<div className={styles.actions}>
					<button
						onClick={() => dispatch(acceptSomeoneApplication(user))}
						className={`${styles.accept_button} _button-blue`}>Принять заявку</button>
					<button
						onClick={() => dispatch(rejectSomeoneApplication(user.id))}
						className={`${styles.cancel_button} _button-grey`}>Отклонить заявку</button>
				</div>
			</div>
		</div>
	)
}

export default UserIncoming