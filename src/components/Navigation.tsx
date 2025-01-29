import { Spiral as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const navItems = [
		{ label: "Strona główna", href: "#home" },
		{ label: "Usługi", href: "#services" },
		{ label: "Galeria", href: "#gallery" },
		{ label: "Kontakt", href: "#contact" },
	];

	const handleCloseMenuAfterSelect = () => {
		setIsMenuOpen(false);
	};

	return (
		<div className='navigation p-md-2 d-flex align-items-center'>
			<Hamburger toggle={() => setIsMenuOpen(!isMenuOpen)} toggled={isMenuOpen} />

			<Container>
				<div className='navigation__main-container w-100 d-md-flex justify-content-between align-items-center'>
					<h5 className='navigation__label mb-0'>Serwis samochodowy</h5>
					<Nav
						className={`navigation__nav-items-container d-md-flex flex-column flex-md-row justify-content-center align-items-center ${
							isMenuOpen ? "menu-opened" : "menu-closed"
						}`}>
						{navItems.map((item, index) => (
							<motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
								<Nav.Link className='navigation__nav-item' href={item.href} onClick={handleCloseMenuAfterSelect}>
									{item.label}
								</Nav.Link>
							</motion.div>
						))}
					</Nav>
				</div>
			</Container>
		</div>
	);
}
