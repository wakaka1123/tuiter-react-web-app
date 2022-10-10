const WhoToFollowListItem = (who) => {
  return (`

          <li class="list-group-item wd-right-follow text-white">
          
            <div class="row">
            
              <div class="col-2">
                <img class="rounded-circle" src="${who.avatarIcon}" height = "50px">
              </div>
              
              
              <div class="col-8">
                <div class="fw-bolder">${who.userName} <i class="fas fa-check-circle"></i></div>
                <div>@${who.handle}</div>
              </div>
              
              
              <div class="col-2 align-self-center">
                <button type="button" class="btn btn-primary rounded-pill float-end" >Follow</button>
              </div>
              
            </div>
            
          </li>
   `);
}
export default WhoToFollowListItem;