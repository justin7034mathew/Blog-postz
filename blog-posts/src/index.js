import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./images/pic-1.jpg";
import profile2 from "./images/pic-2.jpg";
import profile3 from "./images/pic-3.jpg";
import SingleComment from "./SingleComment";

const App = () => {
  return (
    <div className="ui comments">
      <SingleComment
        name="Naruto Uzumaki"
        date="Today 6:00 pm"
        text=" Rasegan 🌐"
        picture={profile1}
      />
      <SingleComment
        name="Kakashi Hateke"
        date="yestarday 7:00 pm"
        text="kamuii👁️"
        picture={profile2}
      />
      <SingleComment
        name="itachi Uchiha"
        date="Today 10:00 am"
        text="Magkokyo Sharigan 👀"
        picture={profile3}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
