import styles from './Search.module.scss'
import searchButton from '../../aseets/svg/search.svg'

const Search = (props) => {
	return (
		<div className={styles.search}>
			<form className={styles.form}>
				<div className={styles.form_body}>
					<img src={searchButton} />
					<input placeholder='Поиск' type="text" className={styles.input} />
					<button className={styles.button_cancel}>
						<span></span>
						<span></span>
					</button>
				</div>
			</form>
		</div>
	)
}

export default Search