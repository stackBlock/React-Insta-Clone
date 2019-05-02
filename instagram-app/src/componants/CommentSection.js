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
    );
  }
}

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.comments
    };
  }

  addNewComment = e => {
    e.preventDefault();

    let newComments = this.state.data;

    newComments.comments.push({
      username: this.state.data.username,
      text: e.target[0].value
    });

    this.setState({
      data: newComments
    });

    e.target[0].value = "";
  };

  render() {
    return (
      <div>
        <Row className="under-image">
          <Counter />
        </Row>

        {this.state.data.comments.map(comment => (
          <IndComment comments={comment} key={comment[1]} />
        ))}
        <Row className="under-image">
          <Col>
            <Navbar>
              <form onSubmit={this.addNewComment}>
                <NavbarBrand>
                  <input
                    type="text"
                    className="add-a-comment-input"
                    placeholder="Add a comment..."
                  />
                  <button type="submit">
                    <i className="fas fa-ellipsis-h" />
                  </button>
                </NavbarBrand>
              </form>
            </Navbar>
          </Col>
        </Row>
      </div>
    );
  }
}

// function CommentSection(props) {
//   return (
//     <div>
//       <Row className="under-image">
//         <Counter />
//         {/* <Col>
//           <Navbar>
//             <NavbarBrand>
//               <img className="heart-img" src={heart} alt="heart" />
//               <NavbarBrand className="navbarspace">
//                 <img className="heart-img" src={chat} alt="heart" />
//               </NavbarBrand>
//             </NavbarBrand>
//           </Navbar>
//           <Col className="neg-margin-top">999 likes</Col>
//         </Col> */}
//       </Row>

//       {props.comments.map(comment => (
//         <IndComment comments={comment} key={comment[1]} />
//       ))}
//       <Row className="under-image">
//         <Col>
//           <Navbar>
//             <form>
//               <NavbarBrand>
//                 {/* <input
//                   type="text"
//                   className="add-a-comment-input"
//                   placeholder="Add a comment..."
//                 />
//                 <button type="submit">
//                   <i className="fas fa-ellipsis-h" />
//                 </button> */}
//               </NavbarBrand>
//               <NavbarBrand className="navbarspace">...</NavbarBrand>
//             </form>
//           </Navbar>
//         </Col>
//       </Row>
//     </div>
//   );
// }

export default CommentSection;

// <form onSubmit={this.addNewComment}>
//  <input
//   type="text"
//    className="add-a-comment-input"
//    placeholder="Add a comment..."
//  />
//  <button type="submit">
//    <i className="fas fa-ellipsis-h" />
//  </button>
// </form>;

// addNewComment = e => {
//   // addNewComment will push onto the current state's comments array a
//   // new object representing a new comment which will have a hardcoded username and
//   // a text value equal to the value of the input field in the form. Then
//   // copy a newState with the new comment on it onto the current state and
//   // reset the input field's value to an empty string.
//   e.preventDefault();

//   let newComments = this.state.data;

//   newComments.comments.push({
//     username: this.props.username,
//     text: e.target[0].value
//   });

//   this.setState({
//     data: newComments
//   });

//   e.target[0].value = "";
// };
