'use client'
import { Heart, RussianRuble } from 'lucide-react'
import { useState } from 'react'
import s from './Card.module.scss'

const Card = () => {
	const [liked, setLiked] = useState(false)
	return (
		<div className={s.card}>
			<div className={s.imageCard}>
				<img className={s.image} src='/368810.jpg' alt='обложка' />
				{liked === true ? (
					<Heart
						onClick={() => setLiked(!liked)}
						size={30}
						fill='#e95353'
						color='#e95353'
						className={s.heart}
					/>
				) : (
					<Heart
						onClick={() => setLiked(!liked)}
						size={30}
						fill='white'
						color='#898989'
						className={s.heart}
					/>
				)}
			</div>
			<p className={s.title}>Lorem ipsum dolor sit amet.</p>

			<p className={s.price}>
				цена: 123 <RussianRuble size={20} strokeWidth={2.5} />
			</p>
		</div>
	)
}

export default Card
