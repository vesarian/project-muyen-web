import React from 'react'
import { Carousel, Row } from 'react-bootstrap'

const CarouselComponent = () => {
    return (
        <Row>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://panduanwisata.b-cdn.net/wp-content/uploads/2022/09/Cafe-di-Tebet-Muyen-Coffee-Roastery.jpg"
                        alt="First slide"
                        width={1500}
                        height={750}
                    />
                    <Carousel.Caption>
                        <h3>Muyen Cofee Tebet</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://scontent.fcgk4-6.fna.fbcdn.net/v/t39.30808-6/318869438_863131995005289_6325189171844078712_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=FANVWBn2XQ8AX_pUTxN&_nc_zt=23&_nc_ht=scontent.fcgk4-6.fna&oh=00_AfB11dolJJ-WGDL7igg69XEZ47LBUKnRyUlbZ-gFGDOJXA&oe=63BDA983"
                        alt="Second slide"
                        width={1500}
                        height={750}
                    />

                    <Carousel.Caption>
                        <h3>Muyen Cofee Gandaria</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </Row>
    )
}

export default CarouselComponent