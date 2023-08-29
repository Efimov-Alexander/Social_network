import { Link } from 'react-router-dom'
import Search from '../../Search/Search'
import styles from './ApplicationsOutgoing.module.scss'
import UserOutgoing from '../ApplicationsOutgoing/UserOutgoing/UserOutgoing'
import Loader from '../../common/Loader/Loader'

const ApplicationsOutgoing = (props) => {

	let UsersElements = props.outgoing ? props.outgoing.map((user) => {
		return <UserOutgoing
			key={user.id}
			user={user} />
	}) : <div>Users not found</div>

	return (
		<div className={styles.wrapper}>
			{props.isLoading && <Loader />}
			<Search setQueryTerm={props.setQueryTerm} />
			<div className={`_friends-bar`}>
				<div className={styles.applications_count_body}>
					<Link
						to="/applications/incoming"
						className={'_button-grey'}>
						Входящие {props.incoming ? props.incoming.length : 0}
					</Link>
					<div className='_button-active'>
						Исходящие <span>{props.outgoing ? props.outgoing.length : 0}
						</span></div>
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