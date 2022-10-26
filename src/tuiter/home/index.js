import React from "react";
// import onepostsArray from "./oneposts.json";
// import PostListItem from "./post-list-item";
import "./index.css";
import WhatsHappening from "./whats-happening";
import TuitsList from "../tuits/TuitsList";


const HomeComponent = () => {
  return(
      // <ul className="list-group">
      //   {
      //     onepostsArray.map(onepost =>
      //         <PostListItem key={onepost._id} onepost={onepost}/> )
      //   }
      // </ul>

      <div>
        <h4>Home</h4>
        <WhatsHappening/>
        <TuitsList/>
      </div>


  );
};

export default HomeComponent;