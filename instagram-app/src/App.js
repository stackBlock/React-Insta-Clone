import React from "react";
import { Container, Row, Col, Navbar } from "reactstrap";
import toppic from "./ig_search_bar.png";
import heart from "./like.png";
import chat from "./chat.png";
import "./App.css";
import NavbarBrand from "reactstrap/lib/NavbarBrand";
import dummyData from "./dummy-data";

function CommentSection(props) {
  return (
    <div>
      <Row className="under-image">
        <Col>
          <Navbar>
            <NavbarBrand>
              <img className="heart-img" src={heart} alt="heart" />
              <NavbarBrand className="navbarspace">
                <img className="heart-img" src={chat} alt="heart" />
              </NavbarBrand>
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

function MainImage(props) {
  return (
    <div>
      <Row className="middlewidth">
        <img src={props.mainImg} alt="main pic" />
      </Row>
    </div>
  );
}

function Header(props) {
  return (
    <div>
      {console.log(props.logo)}
      {console.log(props.name)}

      <Row className="middlewidth toppart">
        <Col>
          <Navbar>
            <NavbarBrand>
              <img className="logo-img" src={props.logo} alt="logo" />
              <NavbarBrand className="navbarspace">{props.name}</NavbarBrand>
            </NavbarBrand>
          </Navbar>
        </Col>
      </Row>
    </div>
  );
}

function PostContainer(props) {
  return (
    <div>
      <Header logo={props.gram.thumbnailUrl} name={props.gram.username} />
      <MainImage mainImg={props.gram.imageUrl} />
      <CommentSection />
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
            <PostContainer gram={gram} key={gram[1]} />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;

// http://jsonplaceholder.typicode.com/users
