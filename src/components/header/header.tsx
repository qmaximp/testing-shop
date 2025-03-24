import Link from 'next/link'
import s from './header.module.scss'

const header = () => {
	return (
		<nav className={s.menu}>
			<Link href='/'>главная</Link>
			<Link href='/products'>каталог</Link>
			<Link href='/favorite'>избранные</Link>
			<Link href='/create'>создать</Link>
			<a href=''>редактировать</a>
		</nav>
	)
}

export default header
