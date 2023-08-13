import { NavLink } from 'react-router-dom'
import Search from '../../Search/Search'
import styles from './FriendsAll.module.scss'
import Loader from '../../common/Loader/Loader'
import User from '../User/User'

const FriendsAll = ({ friends, ...props }) => {

	let UsersElements = friends.all.map((user) => {
		return (<User
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
					<div className='_button-active'>Все друзья <span>{friends.all.length}</span></div>
					<NavLink
						to="/friends/online"
						className={'_button-grey'}>
						Друзья онлайн {friends.online.length}
					</NavLink>
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

export default FriendsAll