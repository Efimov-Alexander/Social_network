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
import { useAddDialogMutation } from '../../redux/api/dialogs.api'
import { useEditOpenedDialogMessageDialogsMutation, useEditOpenedDialogMessageUsersMutation } from '../../redux/api/openedDialog.api'


const OpenedDialog = ({ user, ...props }) => {

	const getTime = () => {
		let date = new Date()

		const addZero = (minutes) => {
			if (minutes < 10) {
				return `0${minutes}`
			} return minutes
		}
		let time = `${date.getHours()}:${addZero(date.getMinutes())}`
		return (time)
	}
	const [
		[addDialog],
		[editOpenedDialogMessageDialogs],
		[editOpendeDialogMessageUsers]] = [
			useAddDialogMutation(),
			useEditOpenedDialogMessageDialogsMutation(),
			useEditOpenedDialogMessageUsersMutation(),
		]

	const handleSendMessage = async () => {
		if (user.messages.length === 0) { await addDialog(user) }
		const newMessage = {
			id: user.messages.length + 1,
			avatar: "https://stoletovalarisa.ru/wp-content/uploads/2018/07/15094407318551944672_thumbnail_900x.jpg",
			message: props.messageText,
			date: getTime(),
			name: "Иванов Иван",
		}
		const editUser = {
			...user,
			messages: [...user.messages, newMessage]
		}
		await editOpenedDialogMessageDialogs(editUser)
		await editOpendeDialogMessageUsers(editUser)
		props.setMessageText("")
	}

	const MessageElements = user ? user.messages.map((user) => {
		return <User
			key={user.id}
			user={user} />
	}) : <div>Users not found</div>

	return (
		<div className={styles.wrapper}>
			{props.isLoading && <Loader />}
			<div className={styles.header}>
				<div className={styles.user_wrapper}>
					<Link to={'/dialogs'} className={`${styles.button_back} ${styles.button}`}>
						<img src={buttonBack} alt="ButtonBack" />
					</Link>
					<div className={styles.avatar_wrapper}>
						<Link to={`/profile/${user ? user.id : null}`}>
							<img src={user ? user.info.avatar : null} alt="Avatar" />
						</Link>
					</div>
					<div className={styles.name_status_wrapper}>
						<div className={styles.name}>{user ? user.info.name : null}</div>
						{user ? user.info.online === true ?
							<div className={styles.online_true}> В сети </div>
							:
							<div className={styles.online_false}> Не в сети </div> : null}
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
				<button onClick={handleSendMessage} className={`${styles.button_record} ${styles.button}`}>
					<img src={buttonSubmit} alt="ButtonSubmit" />
				</button>
			</div>
		</div>
	)
}

export default OpenedDialog