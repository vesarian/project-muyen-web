import React, { useState } from 'react';
import { Navbar, Container, Offcanvas, Row, Col, Image } from 'react-bootstrap'




const NavbarComponent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar bg="light" expand="lg">



            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>


            <Container fluid='md'>
                <Row>

                    <Col md="auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" onClick={handleShow}>
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />

                        </svg>
                    </Col>
                </Row>
                <Row>
                    <Col md="auto">
                        <Navbar.Brand href="#home">
                            <Image roundedCircle fluid src='https://ik.imagekit.io/santos45/LOGO_MUYEN_x_xAmP0tG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672992272773' width={120} height={75}></Image>
                        </Navbar.Brand>

                    </Col>
                </Row>



            </Container>
        </Navbar>
    )
}

export default NavbarComponent