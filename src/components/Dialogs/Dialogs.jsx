import Search from '../Search/Search'
import styles from './Dialogs.module.scss'
import User from './User/User'
import Loader from '../common/Loader/Loader'
import { useGetDialogsQuery } from '../../redux/api/dialogs.api'

const Dialogs = () => {
	const { data: dialogs, isLoading } = useGetDialogsQuery()

	let DialogsElements = dialogs ? dialogs.map(user => {
		return <User
			info={user.info}
			key={user.id}
			id={user.id}
			messages={user.messages} />
	}) : <div>Users not found</div>

	return (
		<div className={styles.wrapper}>
			{isLoading && <Loader />}
			<div className={styles.body}>
				<Search />
				<ul className={styles.list}>
					{DialogsElements.length === 0 ?
						<div className={styles.null_dialogs_body}>
							<svg fill="#000000" viewBox="0 0 24 24">
								<path id="secondary"
									d="M18,9.5c0,3.59-3.36,6.5-7.5,6.5A8.5,8.5,0,0,1,7,15.27l-.65.28L3,17l1.15-4A5.82,5.82,0,0,1,3,9.5C3,5.91,6.36,3,10.5,3c3.63,0,6.66,2.24,7.35,5.21A5.49,5.49,0,0,1,18,9.5Z"
									fill="#1F3C60" strokeWidth="1"></path>
								<path id="primary"
									d="M17.85,8.21A6.27,6.27,0,0,1,21,13.5,5.82,5.82,0,0,1,19.85,17L21,21l-4-1.73A8.5,8.5,0,0,1,13.5,20a7.47,7.47,0,0,1-7.11-4.45"
									fill="none" stroke="rgb(0, 0, 0)" strokeLinecap="round" strokeLinejoin="round"
									strokeWidth="1"></path>
								<path id="primary-2" data-name="primary"
									d="M18,9.5c0,3.59-3.36,6.5-7.5,6.5A8.5,8.5,0,0,1,7,15.27l-.65.28L3,17l1.15-4A5.82,5.82,0,0,1,3,9.5C3,5.91,6.36,3,10.5,3c3.63,0,6.66,2.24,7.35,5.21A5.49,5.49,0,0,1,18,9.5Z"
									fill="none" stroke="rgb(0, 0, 0)" strokeLinecap="round" strokeLinejoin="round"
									strokeWidth="1"></path>
							</svg>
							<div className={styles.null_dialogs}>У вас нет диалогов</div>
						</div>
						: DialogsElements}
				</ul>
			</div >
		</div >
	)
}

export default Dialogs