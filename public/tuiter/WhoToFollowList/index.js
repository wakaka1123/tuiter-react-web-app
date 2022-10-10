// alert("Hello")
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
  return(
      `
   <div >
      <ul class="list-group">
          <li class="list-group-item wd-right-follow text-white">
            <div class="fw-bolder">
              Who to follow
            </div>
          </li>
                    
          ${
          who.map(who => {
            return(WhoToFollowListItem(who));
          }).join('')
          }

        </ul> 
   </div>
 `)
      ;
}
export default WhoToFollowList;
//



