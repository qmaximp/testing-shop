import s from './BackgroundImage.module.scss'
const BackgroundImage = ({ children }: { children: React.ReactNode }) => {
	return <main className={s.BackgroundImage}>{children}</main>
}

export default BackgroundImage
