import { useDispatch } from 'react-redux'
import styles from './News.module.scss'
import React, { useState } from 'react'
import { addPost } from '../../../redux/profile.slice'

const News = (props) => {

	const dispatch = useDispatch()
	const [newPostText, setText] = useState("")

	const onAddPost = async () => {
		const profile = props.profile
		await dispatch(addPost({ profile, newPostText }))
		setText("")
	}
	return (
		<div className={styles.news_wrapper}>
			<img
				src="https://stoletovalarisa.ru/wp-content/uploads/2018/07/15094407318551944672_thumbnail_900x.jpg"
				alt="Avatar"
				className={styles.avatar} />
			<textarea
				onChange={e => setText(e.currentTarget.value)}
				value={newPostText}
				placeholder='Что у вас новго?'
				className={styles.textarea} />
			<button
				onClick={onAddPost}
				className={styles.button}>Опубликовать</button>
		</div>)
}



export default News