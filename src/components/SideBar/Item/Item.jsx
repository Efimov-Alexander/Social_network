import { NavLink } from 'react-router-dom'
import styles from './Item.module.scss'

const Item = (props) => {
	return (
		<li className={styles.item}>
			<img src={props.svg} />
			<NavLink to={`${props.url}`} className={styles.link}>{props.value}</NavLink>
		</li >
	)
}

export default Item