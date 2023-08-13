import styles from './News.module.scss'
import React, { useState } from 'react'

const News = (props) => {

	const [text, setText] = useState("")

	const updateText = (e) => {
		setText(e.currentTarget.value)
	}

	const addPost = () => {
		props.addPost(props.user, text)
		setText("")
	}

	return (
		<div className={styles.news_wrapper}>
			<img
				src="https://stoletovalarisa.ru/wp-content/uploads/2018/07/15094407318551944672_thumbnail_900x.jpg"
				alt="Avatar"
				className={styles.avatar} />
			<textarea
				onChange={updateText}
				value={text}
				placeholder='Что у вас новго?'
				className={styles.textarea} />
			<button
				onClick={addPost}
				className={styles.button}>Опубликовать</button>
		</div>)
}



export default News