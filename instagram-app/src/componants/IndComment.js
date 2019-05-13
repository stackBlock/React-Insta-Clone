import React from "react";

import "../App.css";

function IndComment(props) {
  return (
    <div className="bottompart">
      <p>
        <span>{`${props.comments.username} `} </span>
        {props.comments.text}
      </p>
    </div>
  );
}

export default IndComment;
