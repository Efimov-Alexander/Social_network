import styles from './OpenedDialog.module.scss'
import User from './User/User'
import React from 'react'
import buttonBack from '../../aseets/svg/button-back.svg'
import buttonCall from '../../aseets/svg/phone-call.svg'
import nullMessages from '../../aseets/svg/messages.svg'
import buttonAddContent from '../../aseets/svg/button-add-content.svg'
import buttonSubmit from '../../aseets/svg/button-submit.svg'
import { Link } from 'react-router-dom'
import Loader from '../common/Loader/Loader'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../../redux/openedDialog.slice'


const OpenedDialog = ({ user, ...props }) => {

	let MessageElements = user.messages.map((user) => {
		return <User
			key={user.id}
			user={user} />
	})
	const dispatch = useDispatch()

	const onSendMessage = async () => {
		let messageText = props.messageText
		await dispatch(sendMessage({ messageText, user }))
		props.setMessageText("")
	}
	return (
		<div className={styles.wrapper}>
			{props.isLoading && <Loader />}
			<div className={styles.header}>
				<div className={styles.user_wrapper}>
					<Link to={'/dialogs'} className={`${styles.button_back} ${styles.button}`}>
						<img src={buttonBack} alt="ButtonBack" />
					</Link>
					<div className={styles.avatar_wrapper}>
						<Link to={`/profile/${user.id}`}>
							<img src={user.info.avatar} alt="Avatar" />
						</Link>
					</div>
					<div className={styles.name_status_wrapper}>
						<div className={styles.name}>{user.info.name}</div>
						{user.info.online === true ?
							<div className={styles.online_true}> В сети </div>
							:
							<div className={styles.online_false}> Не в сети </div>}
					</div>
				</div>
				<button className={`${styles.button_call} ${styles.button}`}>
					<img src={buttonCall} alt="ButtonCall" />
				</button>
			</div>
			<div className={styles.main}>
				<div className={styles.main_body}>
					{MessageElements.length != 0 ? MessageElements :
						<div className={styles.null_messages}>
							<img src={nullMessages} alt="NullMessages" />
							Нет сообщений</div>}
				</div>
			</div>
			<div className={styles.footer}>
				<button className={`${styles.button_add_content} ${styles.button}`}>
					<img src={buttonAddContent} alt="ButtonAddContent" />
				</button>
				<textarea
					onChange={(e) => props.setMessageText(e.target.value)}
					value={props.messageText}
					placeholder='Написать сообщение'
					className={styles.message} />
				<button onClick={onSendMessage} className={`${styles.button_record} ${styles.button}`}>
					<img src={buttonSubmit} alt="ButtonSubmit" />
				</button>
			</div>
		</div>
	)
}

export default OpenedDialog