import City from './InfoItems/City'
import DateOfBirth from './InfoItems/DateOfBirth'
import Description from './InfoItems/Description'
import Education from './InfoItems/Education'
import styles from './Info.module.scss'
import { Name } from './Name/Name'
import Activities from './Activities/Activities'


const Info = ({ profile, info, setInfo, ...props }) => {

	return (
		<div className={styles.wrapper}>
			<Name profile={profile} />
			<div className={styles.info_wrapper}>
				<h3 className={styles.subtitle}>Личная информация</h3>
				{profile.info.description && <Description
					description={info.description}
					editMode={info.editMode}
					setDescription={setInfo.setDescription} />}
				<DateOfBirth
					dateOfBirth={info.dateOfBirth}
					editMode={info.editMode}
					setDateOfBirth={setInfo.setDateOfBirth} />
				<City
					city={info.city}
					editMode={info.editMode}
					setCity={setInfo.setCity} />
				<Education
					education={info.education}
					editMode={info.editMode}
					setEducation={setInfo.setEducation} />
				{profile.id === 10000 && <button
					onClick={props.activateEditMode}
					className={styles.button}>Редактировать профиль</button>}
				{info.editMode && <button
					onClick={props.deActivateEditMode}
					className={`${styles.button} ${styles.save_button}`}>Сохранить</button>}
			</div>
			<Activities profile={profile} />
		</div>
	)
}

export default Info