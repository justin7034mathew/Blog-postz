import React from "react";
import profile1 from "./images/pic-1.jpg";

const SingleComment = (props) => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avathar">
        <img src={props.picture} alt="profile picture" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default SingleComment;
