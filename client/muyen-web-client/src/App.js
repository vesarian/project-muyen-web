import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  NavbarComponent,
  CardComponent,
  CarouselComponent,
  FilterButton,
  PaginationComponent,
} from "./components";
import { API_URL } from "./utils/apilink";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      category: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${API_URL}/menus?page=1`)
      .then((res) => {
        const menus = res.data.rows;
        this.setState({ menus });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${API_URL}/categories/main`)
      .then((res) => {
        const category = res.data.map((el) => {
          return el
        });
        console.log(category)
        this.setState({ category });
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const { menus, category } = this.state;
    return (
      <div className="App">
        <NavbarComponent />
        <Container>
          <Row>
            <Col md="12">
              <CarouselComponent />
            </Col>
            <Col>
              <Row className="justify-content-md-center">
                <Col>
                  <h1>Our Menu</h1>
                  <Row>
                    <FilterButton category={category} />
                  </Row>
                  <Row>
                    {menus &&
                      menus.map((menu) => (
                        <CardComponent key={menu.id} menu={menu} />
                      ))}
                  </Row>
                </Col>
              </Row>
            </Col>
            <Row className="justify-content-center">
              <PaginationComponent />
            </Row>
          </Row>

        </Container>
      </div>
    );
  }
}
