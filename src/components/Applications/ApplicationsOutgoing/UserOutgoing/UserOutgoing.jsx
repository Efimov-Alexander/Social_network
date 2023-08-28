import styles from './UserOutgoing.module.scss'
import { Link } from 'react-router-dom'
import { useDeleteApplicationOutgoingMutation } from '../../../../redux/api/applications.api'


const UserOutgoing = ({ user }) => {

	const [deleteApplicationOutgonig] = useDeleteApplicationOutgoingMutation()

	const cancelMyApplication = async () => {
		await deleteApplicationOutgonig(user.id)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.avatar_wrapper}>
				<Link to={`/profile/${user.id}`}>
					<img src={user.info.avatar} alt="Avatar" />
				</Link>
				{user.info.online && <div className={styles.online_true}><span></span></div>}
			</div>
			<div className={styles.info}>
				<div className={styles.name}>{user.info.name}</div>
				<div className={styles.description}>{user.info.description}</div>
				<div className={styles.actions}>
					<button
						onClick={cancelMyApplication}
						className={`${styles.cancel_button} _button-grey`}>Отменить заявку</button>
				</div>
			</div>
		</div>
	)
}

export default UserOutgoing