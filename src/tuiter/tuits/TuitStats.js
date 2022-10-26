import React from "react";
import {useState} from "react"

const TuitStats = ({tuitObjectToStats}) => {

  // const oneTuit = {tuitItemToStats}
  const isLiked = tuitObjectToStats.liked
  // console.log(tuitItemToStats)

  return (
      <div className="wd-bar" >
        <a href="/" className="wd-bar-item"><i className="bi bi-chat"></i><span className="wd-bar-item-left-padding">{tuitObjectToStats.replies}</span></a>
        <a href="/" className="wd-bar-item"><i className="bi bi-arrow-repeat"></i><span className="wd-bar-item-left-padding">{tuitObjectToStats.retuits}</span></a>
        <a href="/" className="wd-bar-item">
          {isLiked && <i className="bi bi-heart-fill wd-bar-item-liked"></i>}
          {!isLiked && <i className="bi bi-heart"></i>}

          <span className="wd-bar-item-left-padding">{tuitObjectToStats.likes}</span></a>
        <a href="/" className="wd-bar-item"><i className="bi bi-share"></i></a>
      </div>
  )

}
export default TuitStats;