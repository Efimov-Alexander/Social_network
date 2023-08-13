import styles from './Post.module.scss'
import Like from '../../../aseets/svg/like.svg'
import Share from '../../../aseets/svg/share.svg'

const Post = (props) => {

	return (
		<li className={styles.wrapper}>
			<div className={styles.user}>
				<img
					src={props.post.avatar}
					alt="Avatar"
					className={styles.avatar} />
				<div className={styles.name_wrapper}>
					<h3 className={styles.name}>{props.post.name}</h3>
					<div className={styles.date}>{props.post.date}</div>
				</div>
			</div>
			<div className={styles.text}>{props.post.text}</div>
			{props.post.img &&
				<div className={styles.image_wrapper}>
					<img src={props.post.img} />
				</div>}
			<div className={styles.like_bar}>
				<button className={`${styles.button_like} _button-like`}>
					<img src={Like} alt="Like" />
					<div className={styles.count_likes}>{props.post.countLikes}</div>
				</button>
				<button className={`${styles.button_repost} _button-repost`}>
					<img src={Share} alt="Share" />
					<div className={styles.count_reposts}>{props.post.countReposts}</div>
				</button>
			</div>
		</li>)
}

export default Post