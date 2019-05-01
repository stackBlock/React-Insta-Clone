import React from "react";
import Header from "./Header";
import MainImage from "./MainImage";
import CommentSection from "./CommentSection";

import "../App.css";

function PostContainer(props) {
  return (
    <div>
      <Header logo={props.gram.thumbnailUrl} name={props.gram.username} />
      <MainImage mainImg={props.gram.imageUrl} />

      <CommentSection comments={props.gram.comments} />
    </div>
  );
}

export default PostContainer;
