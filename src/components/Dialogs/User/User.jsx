import { Link } from 'react-router-dom'
import styles from './User.module.scss'

const User = (props) => {
	return (
		<li className={styles.item}>
			<Link to={`/dialogs/${props.id}`} className={styles.link}>
				<div className={styles.link_body}>
					<div className={styles.avatar_wrapper}>
						<img src={props.info.avatar} alt="Avatar" className={styles.avatar} />
						{props.info.online === true ? <div className={styles.online_true}><span></span></div> : null}
					</div>
					<div className={styles.info}>
						<div className={styles.name_messag_wrapper}>
							<div className={styles.name}>{props.info.name}</div>
							<div className={styles.message}>
								{props.messages[props.messages.length - 1].message}
							</div>
						</div>
						<div className={styles.data}>
							{props.messages[props.messages.length - 1].date}
						</div>
					</div>
				</div>
			</Link>
		</li >
	)
}

export default User