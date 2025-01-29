import { Col, Container, Row } from "react-bootstrap";
import photos from "./Photos";
import { useState } from "react";

export default function Gallery() {
	const [clickedPhoto, setClickedPhoto] = useState<string | null>(null);

	return (
		<div id='gallery' className='gallery min-vh-100 pb-5'>
			<Container>
				<Row>
					<Col className='m-auto'>
						<h3 className='text-center m-5'>Galeria</h3>

						<div className='gallery__main-container d-flex justify-content-center flex-wrap'>
							{photos.map((item, index) => (
								<div
									key={index}
									className='gallery__photo-container  m-2 m-sm-3 d-flex justify-content-between align-items-center'>
									<img className='gallery__photo' src={item} onClick={() => setClickedPhoto(item)} />
								</div>
							))}
						</div>

						{clickedPhoto && (
							<div className='clicked-photo' onClick={() => setClickedPhoto(null)}>
								<img src={clickedPhoto} />
							</div>
						)}
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='gallery__waves1'>
							<path
								fill='#ece8e8'
								fill-opacity='0.3'
								d='M0,32L40,53.3C80,75,160,117,240,138.7C320,160,400,160,480,160C560,160,640,160,720,138.7C800,117,880,75,960,90.7C1040,107,1120,181,1200,218.7C1280,256,1360,256,1400,256L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z'></path>
						</svg>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='gallery__waves2'>
							<path
								fill='#ece8e8'
								fill-opacity='0.3'
								d='M0,32L60,74.7C120,117,240,203,360,218.7C480,235,600,181,720,160C840,139,960,149,1080,138.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'></path>
						</svg>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
