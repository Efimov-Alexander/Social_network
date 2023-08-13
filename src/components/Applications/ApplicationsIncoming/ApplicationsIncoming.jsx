import { NavLink } from 'react-router-dom'
import Search from '../../Search/Search'
import styles from './ApplicationsIncoming.module.scss'
import UserIncoming from './UserIncoming/UserIncoming'
import Loader from '../../common/Loader/Loader'

const ApplicationsIncoming = ({ applications, ...props }) => {

	let UsersElements = applications.incoming.map((user) => {
		return <UserIncoming
			user={user}
			key={user.id}
			rejectSomeoneApplication={props.rejectSomeoneApplication}
			acceptSomeoneApplication={props.acceptSomeoneApplication} />
	})

	return (
		<div className={styles.wrapper}>
			{props.isLoading && <Loader />}
			<Search />
			<div className={`_friends-bar`}>
				<div className={styles.applications_count_body}>
					<div className='_button-active'>Входящие <span>{applications.incoming.length}</span></div>
					<NavLink
						className={'_button-grey'}
						to="/applications/outgoing">Исходящие {applications.outgoing.length}</NavLink>
				</div>
				<NavLink
					className={'_button-blue'}
					to="/friends/all">Мои друзья</NavLink>
			</div>
			{UsersElements}
		</div>
	)
}

export default ApplicationsIncoming