import React from "react";
import TuitStats from "./TuitStats";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
      tuit = {
        "_id": 123,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }


  return(

      <div className="list-group-item" key="123" >

      <div className="row wd-upper-component-border">
        <div className="col-2"><img className="wd-img wd-pos-avatar" src={`/images/${tuit.image}`} alt=""/></div>
        <div className="col-10 ps-0">

          <div className="row">
            <div className="col-11">
              <div className="wd-name">{tuit.userName} <i className="bi bi-check-circle-fill wd-blue-check" ></i><span className="wd-name-handle"> {tuit.handle}
                <i className="bi bi-dot"></i>{tuit.time}</span></div>
            </div>
            <div className="col-1">
              {/*<div className="">...</div>*/}
              <i className="bi bi-x-lg float-end" onClick={() => dispatch(deleteTuitThunk(tuit._id))}/>

            </div>
          </div>

          <div>
            {tuit.tuit}
          </div>


          <TuitStats tuitObjectToStats={tuit}/>


        </div>



    </div>
      </div>

  );
};
export default TuitItem;