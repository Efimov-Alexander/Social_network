import { Link } from 'react-router-dom'
import styles from './Item.module.scss'

const Item = (props) => {
	return (
		<li className={styles.item}>
			<img src={props.svg} />
			<Link to={`${props.url}`} className={styles.link}>{props.value}</Link>
		</li >
	)
}

export default Item