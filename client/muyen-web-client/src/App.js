import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import CarouselComponent from './components/CarouselComponent';
import { Col, Container, Row } from 'react-bootstrap';
import CardComponent from './components/CardComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Container>
        <Row>
          <Col md="12">
            <CarouselComponent />
          </Col>
          <Col>
            <Row className='justify-content-md-center'>
              <Col>
                <h1>
                  Our Menu
                </h1>
                <Row>
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />

                </Row>
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
