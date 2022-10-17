import React from "react";

const PostListItem = (
    {
      onepost = {
        "retweet-handle":"Elon Musk Retweeted",
        "avatar":".../../images/spacex.png",
        "userName":"SpaceX",
        "handle":"SpaceX",
        "time":"23h",
        "title":"Dennis and Akiko Tito are the first two crewmembers on Starship’s second commercial spaceflight around the Moon → spacex.com/updates",
        "titleLink": "spacex.com/updates",
        "postImage":".../../images/inspiration4-postImage.jpg",
        "postContent":"",
        "innerPostImage": "spacex.png",
        "innerPostContentName": "SpaceX",
        "innerPostContentHandle": "SpaceX",
        "innerPostContentTime": "16h",
        "comments":"595",
        "retweets":"1,168",
        "likes":"11.1K",
        "show-thread-link": "Show this thread"
      }
    }
) => {
  const isRetweeted = onepost["retweet-handle"] === '' ? false:true
  const isThread = onepost["show-thread-link"] === '' ? false:true
  const isPostContent = onepost.postContent === ''? false:true
  const isTitleLink = onepost.titleLink === ''? false:true
  return(
      <div className="list-group-item">
        <div>
          {isRetweeted && <div className="row">
            <div className="col-2 pe-4 wd-top-retweet-handle "><i className="bi bi-arrow-repeat"></i></div>
            <div className="col-10 p-0">{onepost["retweet-handle"]}</div>



          </div>}

        </div>
      <div className="row wd-upper-component-border">
        <div className="col-2 p-0 "><img className="wd-img wd-pos-avatar" src={`/images/${onepost.avatar}`}/></div>
        <div className="col-10 ps-0">

          <div className="row">
            <div className="col-11">
              <div className="wd-name">{onepost.userName} <i className="bi bi-check-circle-fill wd-blue-check" ></i><span className="wd-name-handle"> @{onepost.handle}
                <i className="bi bi-dot"></i>{onepost.time}</span></div>
            </div>
            <div className="col-1">
              <div className="">...</div>
            </div>
          </div>

          <div>
            {onepost.title}
            {isTitleLink && <a href="https://www.spacex.com/updates/index.html" className="wd-remove-underline">{onepost.titleLink}</a>}
          </div>

          <div>
            {!isPostContent&& <img className="wd-mid-pic img-fluid w-100 wd-mid-pic-btn-rounded" src={`/images/${onepost.postImage}`}/>}
            {isPostContent && <div>

              <div className="wd-mid-content">
                <div className="wd-name"><img className="wd-inner-img" src={`/images/${onepost.innerPostImage}`}/>
                  {onepost.innerPostContentName} <i className="bi bi-check-circle-fill wd-blue-check" ></i><span className="wd-name-handle"> @{onepost.innerPostContentHandle}
                  <i className="bi bi-dot"></i>{onepost.innerPostContentTime}</span></div>
                <div>
                  {onepost.postContent}
                </div>
              </div>




            </div>}
          </div>



          <div className="wd-bar" >
            <a href="#" className="wd-bar-item"><i className="bi bi-chat"></i><span className="wd-bar-item-left-padding">{onepost.comments}</span></a>
            <a href="#" className="wd-bar-item"><i className="bi bi-arrow-repeat"></i><span className="wd-bar-item-left-padding">{onepost.retweets}</span></a>
            <a href="#" className="wd-bar-item"><i className="bi bi-heart"></i><span className="wd-bar-item-left-padding">{onepost.likes}</span></a>
            <a href="#" className="wd-bar-item"><i className="bi bi-upload"></i></a>
          </div>

          <div className="wd-show-thread">
            {isThread && <a  className="wd-remove-underline" href="">{onepost["show-thread-link"]}</a>}
          </div>

        </div>



    </div>
      </div>
  );
};
export default PostListItem;