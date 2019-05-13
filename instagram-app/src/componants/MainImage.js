import React from "react";
import { Row } from "reactstrap";
import "../App.css";

function MainImage(props) {
  return (
    <div>
      <Row className="middlewidth">
        <img className="main-pic" src={props.mainImg} alt="main pic" />
      </Row>
    </div>
  );
}

export default MainImage;
