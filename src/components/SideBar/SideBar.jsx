import styles from './SideBar.module.scss'
import Item from './Item/Item'
import profileIcon from './../../aseets/svg/side-bar/profile.svg'
import dialogsIcon from './../../aseets/svg/side-bar/dialogs.svg'
import friendsIcon from './../../aseets/svg/side-bar/friends.svg'
import musicsIcon from './../../aseets/svg/side-bar/musics.svg'
import groupsIcon from './../../aseets/svg/side-bar/groups.svg'

const SideBar = (props) => {

	return (
		<div className={styles.wrapper}>
			<ul className={styles.list}>
				<Item
					value="Профиль"
					url='/profile/10000'
					svg={profileIcon} />
				<Item
					value="Сообщения"
					url='/dialogs'
					svg={dialogsIcon} />
				<Item
					value="Друзья"
					url='/friends/all'
					svg={friendsIcon} />
				<Item
					value="Музыка"
					url='/musics'
					svg={musicsIcon} />
				<Item
					value="Сообщества"
					url='/groups'
					svg={groupsIcon} />
			</ul>
		</div>
	)
}

export default SideBar