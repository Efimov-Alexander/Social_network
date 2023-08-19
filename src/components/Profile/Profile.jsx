import styles from './Profile.module.scss'
import Image from './Image/Image'
import InfoContainer from './Info/InfoContainer'
import News from './News/News'
import Post from './Post/Post'
import Loader from '../common/Loader/Loader'

const Profile = ({ profile, ...props }) => {
	let PostsElements = profile.posts.map((post) => {
		return <Post
			key={post.id}
			post={post} />
	})

	return (
		<div className={styles.wrapper}>
			{props.isLoading && <Loader />}
			<div className={styles.user_info}>
				<Image avatar={profile.info.avatar} />
				<InfoContainer />
			</div>
			<News profile={profile} />
			<ul className={styles.posts}>
				{PostsElements}
			</ul>
		</div>
	)
}

export default Profile