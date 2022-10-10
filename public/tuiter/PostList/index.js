import PostItem from "./PostItem.js";
import oneposts from "./oneposts.js";

const PostList = () => {
  return(
      `
      ${
          oneposts.map(onepost => {
            return(PostItem(onepost));
          }).join('')
      } 

 `)
      ;
}
export default PostList;