import React from "react";
import { Container, Row, Col, Jumbotron, Button, Navbar } from "reactstrap";
import toppic from "./ig_search_bar.png";
import "./App.css";
import NavbarBrand from "reactstrap/lib/NavbarBrand";
import dummyData from "./dummy-data";

function PostContainer(props) {
  return (
    <div>
      <p>name: {props.gram.username}</p>

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
    </div>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myData: dummyData
    };
  }

  render() {
    console.log(this.state.myData);
    return (
      <div>
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
          {this.state.myData.map(gram => (
            <PostContainer gram={gram} />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;

// http://jsonplaceholder.typicode.com/users
