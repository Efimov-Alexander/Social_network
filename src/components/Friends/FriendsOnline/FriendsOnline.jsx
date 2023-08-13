import { NavLink } from 'react-router-dom'
import Search from '../../Search/Search'
import styles from './FriendsOnline.module.scss'
import Loader from '../../common/Loader/Loader'
import User from '../User/User'

const FriendsOnline = ({ friends, ...props }) => {

	let UsersElements = friends.online.map((user) => {
		return (
			<User
				info={user.info}
				id={user.id}
				key={user.id} />)
	})

	return (
		<div className={styles.wrapper} >
			{props.isLoading ? <Loader /> : null}
			<Search />
			<div className={`_friends-bar`}>
				<div className={styles.friends_count_body}>
					<NavLink
						to="/friends/all"
						className={'_button-grey'}>Все друзья {friends.all.length}
					</NavLink>
					<div className='_button-active'>Друзья онлайн <span>{friends.online.length}</span></div>
				</div>
				<NavLink
					className={'_button-blue'}
					to="/applications/incoming">Заявки в друзья
				</NavLink>
			</div>
			{UsersElements}
		</div>
	)
}

export default FriendsOnline