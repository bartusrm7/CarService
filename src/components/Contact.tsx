import { Col, Container, Row } from "react-bootstrap";
import MapComponent from "./MapComponent";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
	return (
		<div id='contact' className='contact min-vh-100 pb-5'>
			<Container>
				<Row>
					<Col>
						<h3 className='text-center m-5'>Kontakt</h3>

						<div className='contact__main-container d-flex flex-column'>
							<div>
								<div className='contact__container d-sm-flex justify-content-between align-items-center'>
									<div className='contact__service-name d-flex justify-content-center align-items-center'>
										<PhoneIcon className='contact__icon' />
										Telefon
									</div>
									<div className='contact__service-description text-center'>
										<a href='tel:+48 786 313 512'>+48 786 313 512</a>
									</div>
								</div>

								<div className='contact__container d-sm-flex justify-content-between align-items-center'>
									<div className='contact__service-name d-flex justify-content-center align-items-center'>
										<HomeIcon className='contact__icon' />
										Adres
									</div>
									<div className='contact__service-description text-center'>Racibórz 47-400, Głubczycka 123</div>
								</div>

								<div className='contact__container d-sm-flex justify-content-between align-items-center'>
									<div className='contact__service-name d-flex justify-content-center align-items-center'>
										<EmailIcon className='contact__icon' />
										Email
									</div>
									<div className='contact__service-description text-center'>
										<a href='mailto:bbogucki7@gmail.com'>bbogucki7@gmail.com</a>
									</div>
								</div>
							</div>
						</div>
						<MapComponent />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
