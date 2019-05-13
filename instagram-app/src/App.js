import React from "react";
import PostContainer from "./componants/PostContainer";
import Dom from "./Dom";
import { Container } from "reactstrap";
import toppic from "./ig_search_bar.png";

import "./App.css";
import dummyData from "./dummy-data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myData: []
    };
  }

  componentDidMount() {
    this.setState({ myData: dummyData });
  }

  handleChanges = e => {
    this.setState({
      gramText: e.target.value
    });
  };

  fetchGram = () => {
    console.log(this.state.gramText);
    this.setState(prevState => {
      const filteredPosts = prevState.myData.filter(data => {
        return data.username.includes(this.state.gramText);
      });
      return {
        myData: filteredPosts,
        gramText: ""
      };
    });
  };

  render() {
    console.log(this.state.myData);
    return (
      <div>
        <Container>
          <img src={toppic} className="topimage" alt="logo" />

          <input
            type="text"
            value={this.state.gramText}
            onChange={this.handleChanges}
          />
          <button onClick={this.fetchGram}>input</button>
          <div className="gram" />
          {this.state.myData.map(gram => (
            <PostContainer gram={gram} key={gram.timestamp} />
          ))}
          <Dom />
        </Container>
      </div>
    );
  }
}

export default App;
