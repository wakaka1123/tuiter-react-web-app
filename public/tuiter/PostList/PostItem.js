const PostItem = (onepost) => {
  return (`
       
      <div class="row wd-upper-component-border">
      <div class="col-2"><img class="wd-img wd-pos-avatar" src="${onepost.avatar}"></div>
      <div class="col-10">
      
            <div class="row">
            <div class="col-11">
            <div class="wd-name">${onepost.userName}<span class="wd-name-handle">@${onepost.handle} &#149; <time
              datetime="7-31">${onepost.time}</time></span></div>
            </div>
            <div class="col-1">
            <div class="">...</div>
            </div>            
            </div>
        
        <div>
        ${onepost.title}
        </div>

        
        
          <div >
            <img class="wd-mid-pic img-fluid w-100 ${(onepost.postTitle&&onepost.postContent)  ? "" : "wd-mid-pic-btn-rounded"} " src="${onepost.postImage}">
          </div>
          <div class="${(onepost.postTitle&&onepost.postContent)  ? "wd-mid-content" : "wd-mid-content-none"} ">
            <div class="${(onepost.postTitle&&onepost.postContent)  ? "wd-mid-content-padding" : "wd-mid-content-padding-hide"}">
              <span class="wd-poster-title">${onepost.postTitle}<br></span>
              ${onepost.postContent}
            </div>
          </div>       
        

        
    </div>
        <div class="wd-bar">
          <a href="#" class="wd-bar-item"><i class="far fa-comment-dots"></i><span class="wd-bar-item-left-padding">${onepost.comments}</span></a>
          <a href="#" class="wd-bar-item"><i class="fas fa-retweet"></i><span class="wd-bar-item-left-padding">${onepost.retweets}</span></a>
          <a href="#" class="wd-bar-item"><i class="fas fa-heart"></i><span
              class="wd-bar-item-left-padding">${onepost.likes}</span></a>
          <a href="#" class="wd-bar-item"><i class="fas fa-upload"></i></span></a>
        </div>
    
    </div>
       
       
       
       
   `);
}
export default PostItem;