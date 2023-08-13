import styles from './Loader.module.scss'
import loader from '../../../aseets/svg/loader.svg'

const Loader = () => {
	return (
		<div>
			<div className={styles.loader_overlay} />
			<img className={styles.loader} src={loader} alt="loader" />
		</div>
	)
}

export default Loader