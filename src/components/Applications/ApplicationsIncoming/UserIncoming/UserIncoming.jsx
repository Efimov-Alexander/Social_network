import styles from './UserIncoming.module.scss'
import { Link } from 'react-router-dom'
import { useDeleteApplicationIncomingMutation } from '../../../../redux/api/applications.api'
import { usePostFriendsAllMutation, usePostFriendsOnlineMutation } from '../../../../redux/api/friends.api'

const UserIncoming = ({ user }) => {

	const [
		[postFriendsAll],
		[postFriendsOnline],
		[deleteApplicationIncoming],] = [
			usePostFriendsAllMutation(),
			usePostFriendsOnlineMutation(),
			useDeleteApplicationIncomingMutation(),]

	const acceptSomeoneApplication = async () => {
		if (user.info.online) { await postFriendsOnline(user) }
		await postFriendsAll(user)
		await deleteApplicationIncoming(user.id)
	}

	const rejectSomeoneApplication = async () => {
		await deleteApplicationIncoming(user.id)
	}

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
						onClick={acceptSomeoneApplication}
						className={`${styles.accept_button} _button-blue`}>Принять заявку</button>
					<button
						onClick={rejectSomeoneApplication}
						className={`${styles.cancel_button} _button-grey`}>Отклонить заявку</button>
				</div>
			</div>
		</div>
	)
}

export default UserIncoming