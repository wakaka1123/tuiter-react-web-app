import React from "react";
import {useState} from "react"
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuitObjectToStats}) => {

  // const oneTuit = {tuitItemToStats}
  const isLiked = tuitObjectToStats.liked
  // console.log(tuitItemToStats)
  const dispatch = useDispatch();
  const updatedTuitHandler = ()=>{
    const updatedTuit = {
      ...tuitObjectToStats,
      likes: tuitObjectToStats.likes+1,
    }
    dispatch(updateTuitThunk(updatedTuit))

  }

  return (
      <div className="wd-bar" >

          <div className="col-3 wd-bar-item"><i className="bi bi-chat"/>{tuitObjectToStats.replies}</div>
          <div className="col-3 wd-bar-item"><i className="bi bi-arrow-repeat"/>{tuitObjectToStats.retuits}</div>
          <div className="col-3 wd-bar-item">


              {isLiked && <i className="bi bi-heart-fill wd-bar-item-liked"/>}
              {!isLiked && <i onClick={() => updatedTuitHandler(tuitObjectToStats)} className="bi bi-heart"/>}



              {tuitObjectToStats.likes}



          </div>
          <div className="col-3 wd-bar-item"><i className="bi bi-share"/>


          </div>






      </div>
  )

}
export default TuitStats;