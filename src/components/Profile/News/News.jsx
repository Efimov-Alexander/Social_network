import { useEditProfilePostsMutation } from '../../../redux/api/profile.api'
import styles from './News.module.scss'
import React, { useState } from 'react'

const News = (props) => {
	const getDateMonthTime = () => {
		let date = new Date()
		const detectionMonth = () => {
			let month = date.getMonth()
			switch (month) {
				case 0:
					return "Январь"
				case 1:
					return "Февраль"
				case 2:
					return "Март"
				case 3:
					return "Апрель"
				case 4:
					return "Май"
				case 5:
					return "Июнь"
				case 6:
					return "Июль"
				case 7:
					return "Август"
				case 8:
					return "Сентябрь"
				case 9:
					return "Октябрь"
				case 10:
					return "Ноябрь"
				case 11:
					return "Декабрь"
				case 11:
					return "Январь"
			}
		}
		const addZero = (minutes) => {
			if (minutes < 10) {
				return `0${minutes}`
			} else return minutes
		}
		let time = `${date.getDate()} ${detectionMonth()} ${date.getHours()}:${addZero(date.getMinutes())}`
		return (time)
	}
	const [newPostText, setText] = useState("")
	const [editProfilePosts] = useEditProfilePostsMutation()

	const onAddPost = async () => {
		const newPost = {
			id: props.profile.posts.length + 1,
			avatar: "https://stoletovalarisa.ru/wp-content/uploads/2018/07/15094407318551944672_thumbnail_900x.jpg",
			text: newPostText,
			name: "Сергей Сергеев",
			date: getDateMonthTime(),
			img: "",
			countLikes: 0,
			countReposts: 0
		}
		const newProfile = {
			...props.profile,
			posts: [newPost, ...props.profile.posts]
		}
		await editProfilePosts(newProfile)
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