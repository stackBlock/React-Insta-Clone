import React from "react";
import IndComment from "./IndComment";
import { Row, Col, Navbar } from "reactstrap";
import heart from "../like.png";
import chat from "../chat.png";
import "../App.css";
import NavbarBrand from "reactstrap/lib/NavbarBrand";

class Counter extends React.Component {
  state = { count: 0 };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  render() {
    return (
      <Col>
        <Navbar>
          <NavbarBrand>
            <button onClick={this.handleClick}>
              {" "}
              <img className="heart-img" src={heart} alt="heart" />
            </button>
            <NavbarBrand className="navbarspace">
              <img className="heart-img" src={chat} alt="heart" />
            </NavbarBrand>
          </NavbarBrand>
        </Navbar>
        <Col className="neg-margin-top">{this.state.count} likes</Col>
      </Col>
      // <button
      //   style={{ fontSize: "5em", display: "block" }}
      //   onClick={this.handleClick}
      // >
      //   {this.state.count}
      // </button>
    );
  }
}

function CommentSection(props) {
  return (
    <div>
      <Row className="under-image">
        <Counter />
        {/* <Col>
          <Navbar>
            <NavbarBrand>
              <img className="heart-img" src={heart} alt="heart" />
              <NavbarBrand className="navbarspace">
                <img className="heart-img" src={chat} alt="heart" />
              </NavbarBrand>
            </NavbarBrand>
          </Navbar>
          <Col className="neg-margin-top">999 likes</Col>
        </Col> */}
      </Row>

      {props.comments.map(comment => (
        <IndComment comments={comment} key={comment[1]} />
      ))}
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

export default CommentSection;
