import { Col, Container, Row } from "react-bootstrap";
import servicesAndDescriptions from "./ServiceAndDescription";

export default function Services() {
	return (
		<div id='services' className='services min-vh-100 d-flex justify-content-center align-items-center'>
			<h3 className='services__label text-center pt-5'>Usługi</h3>
			<Container>
				<Row>
					<Col md={10} lg={10} xl={8} className='m-auto'>
						<div className='services__main-container'>
							{servicesAndDescriptions.map((item, index) => (
								<div key={index} className='services__container mb-4 d-sm-flex justify-content-between'>
									<h5 className='services__service-name text-center text-sm-start'>{item.service}</h5>
									<div className='services__service-description text-center'>{item.description}</div>
								</div>
							))}
						</div>
					</Col>
				</Row>
			</Container>
			<div className='services__mechanic-tools-icon icon1'></div>
			<div className='services__mechanic-tools-icon icon2'></div>
			<div className='services__mechanic-tools-icon icon3'></div>
		</div>
	);
}
