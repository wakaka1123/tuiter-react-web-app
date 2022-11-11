import React,{useEffect} from "react";
// import tuitsArray from "./tuits.json";
import {useDispatch,useSelector} from "react-redux";
import TuitItem from "./TuitItem";
import {deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";
import "./index.css";


const TuitsList = () => {
  const {tuits,loading} = useSelector(state => state.tuitsData)
  // console.log(tuitsArray)
  // console.log(loading)
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findTuitsThunk())}, [])

  return(

      <ul className="list-group">

        {loading &&
        <li className="list-group-item">
          Loading...
        </li>
        }

        {
          tuits.map(tuit =>
              <TuitItem key={tuit._id} tuit={tuit}/> )
        }
      </ul>


  );
};

export default TuitsList;