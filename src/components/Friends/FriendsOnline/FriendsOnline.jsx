import { Link } from 'react-router-dom'
import Search from '../../Search/Search'
import styles from './FriendsOnline.module.scss'
import Loader from '../../common/Loader/Loader'
import User from '../User/User'

const FriendsOnline = (props) => {

	let UsersElements = props.online ? props.online.map((user) => {
		return (
			<User
				info={user.info}
				id={user.id}
				key={user.id} />)
	}) : <div>Users not found</div>

	return (
		<div className={styles.wrapper} >
			{props.isLoading ? <Loader /> : null}
			<Search />
			<div className={`_friends-bar`}>
				<div className={styles.friends_count_body}>
					<Link
						to="/friends/all"
						className={'_button-grey'}>
						Все друзья {props.all ? props.all.length : 0}
					</Link>
					<div className='_button-active'>
						Друзья онлайн <span>{props.online ? props.online.length : 0}</span>
					</div>
				</div>
				<Link
					className={'_button-blue'}
					to="/applications/incoming">Заявки в друзья
				</Link>
			</div>
			{UsersElements}
		</div>
	)
}

export default FriendsOnline