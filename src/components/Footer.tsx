export default function Footer() {
	const currentDate = new Date().getFullYear();

	return <footer className='p-2 text-center'>&copy;{currentDate} Serwis samochodowy</footer>;
}
