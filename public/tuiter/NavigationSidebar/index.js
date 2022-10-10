import oneNavBars from "./oneNavBars.js";
import navBarItem from "./navBarItem.js";

const NavigationSidebar = (activePage) => {

  //take in name of the page to activate as param
  //change style of page to activate
  //change the oneNavBars
  for(let i=0;i<oneNavBars.length;i++){
    if(oneNavBars[i].barName === activePage){
      oneNavBars[i].activeStatus = true;
    }
  }

  let content = (
      `
   <div class="list-group">
   
   
   
   
    ${
          oneNavBars.map(oneNavBar => {
            return(navBarItem(oneNavBar));
          }).join('')
      }      
                        
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>   
   
   
 `);

  // $('.list-group').on('click','.list-group-item',()=>{
  //   alert('click')
  //
  // })


  return content;
}



// $(".list-group .list-group-item").click(function(e) {
//   $(".list-group .list-group-item").removeClass("active");
//   $(e.target).addClass("active");
// });


// const handleEventTarget = (event) => {
//   const target = event.target;
//   console.log(target);
//   $(target)
//   .classList.add("active")
// }
// const eventTarget = $("#Explore");
// eventTarget.click(handleEventTarget);



export default NavigationSidebar;
//



