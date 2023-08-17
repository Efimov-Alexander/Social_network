import { Link } from 'react-router-dom'
import Search from '../../Search/Search'
import styles from './ApplicationsOutgoing.module.scss'
import UserOutgoing from '../ApplicationsOutgoing/UserOutgoing/UserOutgoing'
import Loader from '../../common/Loader/Loader'

const ApplicationsOutgoing = ({ applications, ...props }) => {

	let UsersElements = applications.outgoing.map((user) => {
		return <UserOutgoing
			cancelMyApplication={props.cancelMyApplication}
			key={user.id}
			user={user} />
	})

	return (
		<div className={styles.wrapper}>
			{props.isLoading ? <Loader /> : null}
			<Search />
			<div className={`_friends-bar`}>
				<div className={styles.applications_count_body}>
					<Link
						to="/applications/incoming"
						className={'_button-grey'}>Входящие {applications.incoming.length}</Link>
					<div className='_button-active'>Исходящие <span>{applications.outgoing.length}</span></div>
				</div>
				<Link
					className={'_button-blue'}
					to="/friends/all">Мои друзья</Link>
			</div>
			{UsersElements}
		</div>
	)
}

export default ApplicationsOutgoing