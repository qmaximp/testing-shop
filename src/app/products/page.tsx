import Card from '@/components/card/Card'

const page = () => {
	return (
		<div
			style={{
				margin: '0px auto',
				padding: '0 10px',
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
				justifyItems: 'center',
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
