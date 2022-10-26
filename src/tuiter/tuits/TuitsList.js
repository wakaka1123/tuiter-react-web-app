import React from "react";
// import tuitsArray from "./tuits.json";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";
import "./index.css";


const TuitsList = () => {
  const tuitsArray = useSelector(state => state.tuits)
  // console.log(tuitsArray)
  return(
      <ul className="list-group">
        {
          tuitsArray.map(tuit =>
              <TuitItem key={tuit._id} tuit={tuit}/> )
        }
      </ul>


  );
};

export default TuitsList;