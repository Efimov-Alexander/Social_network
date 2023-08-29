import styles from './Search.module.scss'
import searchButton from '../../aseets/svg/search.svg'
import { useState } from 'react'

const Search = (props) => {

	const [searchTerm, setSearchTerm] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		props.setQueryTerm(searchTerm)
	}
	const resetSearchTerm = () => {
		setSearchTerm("")
	}

	return (
		<div className={styles.search}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.form_body}>
					<img src={searchButton} />
					<input
						placeholder='Поиск'
						value={searchTerm}
						className={styles.input}
						onChange={e => setSearchTerm(e.target.value)} />
					{searchTerm && <button
						className={styles.button_cancel}
						onClick={resetSearchTerm}
						type='button' >
						<span></span>
						<span></span>
					</button>}
				</div>
			</form>
		</div>
	)
}

export default Search