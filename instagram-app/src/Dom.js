import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

function Dom() {
  return (
    <div className="App">
      <AngryTitle text="Hello CodeSandbox" />
      <AngrySubTitle text="Start editing to see some magic happen!" />
    </div>
  );
}

const Title = props => {
  return <h1>{props.text}</h1>;
};

const SubTitle = props => {
  return <h2>{props.text}</h2>;
};

const withCaps = PassedComponent => props => {
  const capsText = props.text.toLowerCase();
  return <PassedComponent text={capsText} />;
};

const AngryTitle = withCaps(Title); // ==> ???

// const AngryTitle = props => {
//   const capsText = props.text.toUpperCase();
//   return <Title text={capsText} />;
// }; // ==> ???

const AngrySubTitle = withCaps(SubTitle);
// const AngrySubTitle = props => {
//   const capsText = props.text.toUpperCase();
//   return <SubTitle text={capsText} />;
// }; // ==> ???

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default Dom;
