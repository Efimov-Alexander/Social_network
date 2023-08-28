import styles from './Profile.module.scss'
import Image from './Image/Image'
import InfoContainer from './Info/InfoContainer'
import News from './News/News'
import Post from './Post/Post'
import Loader from '../common/Loader/Loader'

const Profile = ({ profile, ...props }) => {
	
	let PostsElements = profile ? profile.posts.map((post) => {
		return <Post
			key={post.id}
			post={post} />
	}) : <div>Posts not found</div>

	return (
		<div className={styles.wrapper}>
			{props.isLoading && <Loader />}
			<div className={styles.user_info}>
				<Image avatar={profile ? profile.info.avatar : <div>Avatar not found</div>} />
				<InfoContainer profile={profile} />
			</div>
			<News profile={profile} />
			<ul className={styles.posts}>
				{PostsElements}
			</ul>
		</div>
	)
}

export default Profile