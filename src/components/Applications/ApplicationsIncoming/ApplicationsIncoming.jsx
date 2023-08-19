import { Link } from 'react-router-dom'
import Search from '../../Search/Search'
import styles from './ApplicationsIncoming.module.scss'
import UserIncoming from './UserIncoming/UserIncoming'
import Loader from '../../common/Loader/Loader'

const ApplicationsIncoming = (props) => {

	let UsersElements = props.incoming.map((user) => {
		return <UserIncoming
			user={user}
			key={user.id} />
	})

	return (
		<div className={styles.wrapper}>
			{props.isLoading && <Loader />}
			<Search />
			<div className={`_friends-bar`}>
				<div className={styles.applications_count_body}>
					<div className='_button-active'>Входящие <span>{props.incoming.length}</span></div>
					<Link
						className={'_button-grey'}
						to="/applications/outgoing">Исходящие {props.outgoing.length}</Link>
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