import s from './header.module.scss'

const header = () => {
	return (
		<nav className={s.menu}>
			<a href=''>главная</a>
			<a href=''>каталог</a>
			<a href=''>избранные</a>
			<a href=''>создать</a>
			<a href=''>редактировать</a>
		</nav>
	)
}

export default header
