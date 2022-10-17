import React from "react";
import onepostsArray from "./oneposts.json";
import PostListItem from "./post-list-item";
import "./index.css";


const HomeComponent = () => {
  return(
      <ul className="list-group">
        {
          onepostsArray.map(onepost =>
              <PostListItem onepost={onepost}/> )
        }
      </ul>


  );
};

export default HomeComponent;