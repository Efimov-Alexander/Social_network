import styles from './Image.module.scss'

const Image = (props) => {
	return (
		<div className={styles.wrapper}>
			<img
				src={props.avatar}
				alt="Avatar" />
		</div>)
}

export default Image