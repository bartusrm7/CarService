import Contact from "./Contact";
import MainPage from "./MainPage";
import Navigation from "./Navigation";
import Services from "./Services";
import Gallery from "./Gallery";
import Footer from "./Footer";

export default function Home() {
	return (
		<div id='home' className='home'>
			<div className='home__main-container'>
				<Navigation />
				<MainPage />
				<Services />
				<Gallery />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}
