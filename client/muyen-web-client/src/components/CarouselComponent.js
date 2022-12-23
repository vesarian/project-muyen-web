import React from 'react'
import { Carousel, Row } from 'react-bootstrap'

const CarouselComponent = () => {
    return (
        <Row>

            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://asset.kompas.com/crops/dpBqMlzEj_S-TGPv4TRg0EYlb7w=/0x0:5310x3540/750x500/data/photo/2022/08/14/62f9075278e0d.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://imageio.forbes.com/specials-images/imageserve/5d5b64aa68cb0a0009178e26/0x0.jpg?format=jpg&width=1200"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </Row>
    )
}

export default CarouselComponent