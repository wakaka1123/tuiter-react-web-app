const navBarItem = (oneNavBar) => {
  return (`
       <a href="${oneNavBar.link}" class="list-group-item list-group-item-action ${oneNavBar.activeStatus ? "active" :""}">
          <div class="row">
            <div class="col-2">
              <i class="${oneNavBar.icon}"></i>
            </div>
            <div class="col-10 d-none d-xl-block">${oneNavBar.barName}</div>
          </div>     
       </a>
   `);
}
export default navBarItem;