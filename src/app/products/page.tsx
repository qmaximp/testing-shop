import Card from '@/components/card/Card'

const page = () => {
	return (
		<div
			style={{
				margin: '0px auto',
				display: 'flex',
				flexWrap: 'wrap',
				flexDirection: 'row',
				gap: '20px',
			}}
		>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	)
}

export default page
