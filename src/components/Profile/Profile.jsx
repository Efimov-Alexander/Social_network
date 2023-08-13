import styles from './Profile.module.scss'
import Image from './Image/Image'
import InfoContainer from './Info/InfoContainer'
import News from './News/News'
import Post from './Post/Post'
import Loader from '../common/Loader/Loader'

const Profile = ({ user, ...props }) => {

	let PostsElements = user.posts.map((post) => {
		return <Post
			key={post.id}
			post={post} />
	})

	return (
		<div className={styles.wrapper}>
			{props.isLoading && <Loader />}
			<div className={styles.user_info}>
				<Image avatar={user.info.avatar} />
				<InfoContainer />
			</div>
			<News user={user} addPost={props.addPost} />
			<ul className={styles.posts}>
				{PostsElements}
			</ul>
		</div>
	)
}

export default Profile