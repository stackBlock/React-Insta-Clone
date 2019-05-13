// import React from "react";
// import PostContainer from "./componants/PostContainer";
// import { Container, Row, Col, Navbar } from "reactstrap";
// import toppic from "./ig_search_bar.png";
// import heart from "./like.png";
// import chat from "./chat.png";
// import "./App.css";
// import NavbarBrand from "reactstrap/lib/NavbarBrand";
// import dummyData from "./dummy-data";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       myData: dummyData
//     };
//   }

//   // componentDidMount() {
//   //   fetch("./dummy-data")
//   //     .then(res => res.json())
//   //     .then(dogs => this.setState({ myData: dummyData }))
//   //     .catch(err => console.log("noooo"));
//   // }

//   // print back function

//   // handleChanges = e => {
//   //   this.setState({
//   //     doggoText: e.target.value
//   //   });
//   // };

//   // choose post function

//   // fetchDoggos = e => {
//   //   e.preventDefault();
//   //   fetch(`https://dog.ceo/api/breed/${this.state.doggoText}/images`)
//   //     .then(res => res.json())
//   //     .then(dogs => this.setState({ doggos: dogs.message }))
//   //     .catch(err => console.log('noooo'));
//   // };

//   render() {
//     console.log(this.state.myData);
//     return (
//       <div>
//         <Container>
//           <img src={toppic} className="topimage" alt="logo" />

//           {/* <Row className="header">
// <Col xs="1">.col</Col>
// <Col xs="4">.col</Col>
// <Col xs="4">.col</Col>
// <Col xs="1">.col</Col>
// <Col xs="1">.col</Col>
// <Col xs="1">.col</Col>
// </Row> */}

//           {/* this is the input  */}

//           {/* <input
//             type="text"
//             value={this.state.doggoText}
//             onChange={this.handleChanges}
//           />
//           <button onClick={this.fetchDoggos}>Fetch doggos</button>
//           <div className="doggos" /> */}
//           {this.state.myData.map(gram => (
//             <PostContainer gram={gram} key={gram[1]} />
//           ))}
//         </Container>
//       </div>
//     );
//   }
// }

// export default App;

// // http://jsonplaceholder.typicode.com/users
