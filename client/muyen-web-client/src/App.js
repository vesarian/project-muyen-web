import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavbarComponent, CardComponent, CarouselComponent, FilterButton } from './components';
import { API_URL } from './utils/apilink';
import axios from 'axios';



export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
    }
  }

  componentDidMount() {
    axios.get(`${API_URL}/menus`)
      .then(res => {
        const menus = res.data;
        console.log(menus)
        this.setState({ menus });
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { menus } = this.state
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
                  <Row >
                    <FilterButton />
                  </Row>
                  <Row>
                    {menus && menus.map((menu) => (
                      <CardComponent
                        key={menu.id}
                        menu={menu}
                      />
                    ))}
                  </Row>
                </Col>

              </Row>
            </Col>
          </Row>
        </Container >


      </div >
    )
  }
}
