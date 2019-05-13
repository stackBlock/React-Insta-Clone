import React from "react";
import { Row, Col, Navbar } from "reactstrap";
import "../App.css";
import NavbarBrand from "reactstrap/lib/NavbarBrand";

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

export default Header;
