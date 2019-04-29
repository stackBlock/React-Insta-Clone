import React from "react";
import { Container, Row, Col, Jumbotron, Button, Navbar } from "reactstrap";
import toppic from "./ig_search_bar.png";
import "./App.css";
import NavbarBrand from "reactstrap/lib/NavbarBrand";

function App() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>

      <Container>
        <img src={toppic} className="topimage" alt="logo" />

        {/* <Row className="header">
          <Col xs="1">.col</Col>
          <Col xs="4">.col</Col>
          <Col xs="4">.col</Col>
          <Col xs="1">.col</Col>
          <Col xs="1">.col</Col>
          <Col xs="1">.col</Col>
        </Row> */}
        <Row className="middlewidth toppart">
          <Col>
            <Navbar>
              <NavbarBrand>
                image
                <NavbarBrand className="navbarspace">account name</NavbarBrand>
              </NavbarBrand>
            </Navbar>
          </Col>
        </Row>
        <Row className="middlewidth">
          <img
            src={
              "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg"
            }
            alt="main pic"
          />
        </Row>
        <Row className="under-image">
          <Col>
            <Navbar>
              <NavbarBrand>
                image
                <NavbarBrand className="navbarspace">image</NavbarBrand>
              </NavbarBrand>
            </Navbar>
            <Col className="neg-margin-top">999 likes</Col>
          </Col>
        </Row>
        <Row className="bottompart">
          <Col>
            <div>commment api</div>
          </Col>
        </Row>
        <Row className="under-image">
          <Col>
            <Navbar>
              <NavbarBrand>Add a commment...</NavbarBrand>
              <NavbarBrand className="navbarspace">...</NavbarBrand>
            </Navbar>
          </Col>
        </Row>
        {/* <Row>
          <Col xs="3">.col-3</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row>
        <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
          <Col xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>
            .col-sm-6 .order-sm-2 .offset-sm-1
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            .col-sm-12 .col-md-6 .offset-md-3
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: "auto", offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
          <Col sm={{ size: "auto", offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default App;
