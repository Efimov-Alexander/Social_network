import styles from './User.module.scss'
import { NavLink } from 'react-router-dom'


const User = ({ info, ...props }) => {

	return (
		<div className={styles.wrapper}>
			<div className={styles.avatar_wrapper}>
				<NavLink to={`/profile/${props.id}`}>
					<img src={info.avatar} alt="Avatar" />
				</NavLink>
				{info.online === true &&
					<div className={styles.online_true}><span></span></div>}
			</div>
			<div className={styles.info}>
				<div className={styles.name}>{info.name}</div>
				<div className={styles.description}>{info.description}</div>
				<div className={styles.actions}>
					<NavLink
						to={`/dialogs/${props.id}`}
						className={`${styles.accept_button} _button-blue`}>Написать сообщение</NavLink>
					<button className={`${styles.cancel_button} _button-grey`}>Позвонить</button>
				</div>
			</div>
		</div>
	)
}

export default User