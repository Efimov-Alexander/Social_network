import { Link } from 'react-router-dom'
import Search from '../../Search/Search'
import styles from './ApplicationsIncoming.module.scss'
import UserIncoming from './UserIncoming/UserIncoming'
import Loader from '../../common/Loader/Loader'

const ApplicationsIncoming = (props) => {

	let UsersElements = props.incoming ? props.incoming.map((user) => {
		return <UserIncoming
			user={user}
			key={user.id} />
	}) : <div>Users not found</div>

	return (
		<div className={styles.wrapper}>
			{props.isLoading && <Loader />}
			<Search setQueryTerm={props.setQueryTerm} />
			<div className={`_friends-bar`}>
				<div className={styles.applications_count_body}>
					<div className='_button-active'>Входящие <span>{props.incoming ?
						props.incoming.length : 0}</span></div>
					<Link
						className={'_button-grey'}
						to="/applications/outgoing">Исходящие {props.outgoing ?
							props.outgoing.length : 0} </Link>
				</div>
				<Link
					className={'_button-blue'}
					to="/friends/all">Мои друзья</Link>
			</div>
			{UsersElements}
		</div>
	)
}

export default ApplicationsIncoming