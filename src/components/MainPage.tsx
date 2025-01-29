import { Col, Container, Row } from "react-bootstrap";

export default function MainPage() {
	return (
		<div className='main-page vh-100 d-flex justify-content-center align-items-center'>
			<div className='main-page__main-photo'></div>
			<div className='main-page__background-shadow'></div>

			<Container className='mt-3 mt-sm-5 d-flex text-center justify-content-center'>
				<Row>
					<Col className='d-flex flex-column justify-content-center align-items-center'>
						<h1 className='main-page__label p-3'>Serwis samochodowy</h1>
						<div className='main-page__short-description p2'>
							Profesjonalny warsztat mechanika, który naprawia samochody z prawdziwej pasji. Precyzja, zaangażowanie i
							miłość do motoryzacji gwarantują najwyższą jakość usług.
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
