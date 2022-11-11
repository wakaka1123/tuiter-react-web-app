import React from "react";
import TuitStats from "./TuitStats";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";
import {updateTuit} from "./tuits-reducer";

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


  const isLiked = tuit.liked
  // let updatedTuit


  const updatedTuitHandler = ()=>{
    // if(isLiked){
    //   updatedTuit = {
    //     ...tuit,
    //     likes: tuit.likes-1,
    //     liked: !isLiked
    //   }
    // } else {
    //   updatedTuit = {
    //     ...tuit,
    //     likes: tuit.likes + 1,
    //     liked: !isLiked
    //   }
    // }

    const updatedTuit = {
      ...tuit,
      likes: tuit.likes+1,
    }

    // console.log(updatedTuit)
    dispatch(updateTuitThunk(updatedTuit))
    // dispatch(updateTuit(updatedTuit))
  }

  const updateTuitDislikeHandler = () =>{
    const updatedTuit = {
      ...tuit,
      dislikes: tuit.dislikes+1,
    }
    dispatch(updateTuitThunk(updatedTuit))
  }




  return(

      <div className="list-group-item">

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
              <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}/>

            </div>
          </div>

          <div>
            {tuit.tuit}
          </div>


          <div className="wd-bar" >
            <div className="col-3 wd-bar-item"><i className="bi bi-chat"/>{tuit.replies}</div>
            <div className="col-3 wd-bar-item"><i className="bi bi-arrow-repeat"/>{tuit.retuits}</div>
            <div className="col-3 wd-bar-item">
              {/*{isLiked && <i onClick={(e) => updatedTuitHandler(tuit)} className="bi bi-heart-fill wd-bar-item-liked" />}*/}
              {/*{!isLiked && <i onClick={(e) => updatedTuitHandler(tuit)} className="bi bi-heart"/>}*/}
              <i onClick={(e) => updatedTuitHandler()} className="bi bi-heart-fill wd-bar-item-liked"/>



              {tuit.likes}

            </div>
            {/*<div className="col-3 wd-bar-item"><i className="bi bi-share"/>*/}

              <div className="col-3 wd-bar-item"><i onClick={()=>updateTuitDislikeHandler()} className="bi bi-hand-thumbs-down"/>
                {tuit.dislikes}

            </div>
          </div>



          {/*<TuitStats tuitObjectToStats={tuit}/>*/}


        </div>



    </div>
      </div>

  );
};
export default TuitItem;