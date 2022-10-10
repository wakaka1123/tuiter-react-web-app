import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
    


      <div class="row mt-1">
      
        <div class="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10">
          <div class="position-relative">
            <input class="form-control rounded-pill ps-5 wd-input-size " placeholder="Search Tuiter">
            <i class="fas fa-search position-absolute wd-search-icon-pos text-secondary"></i>
          </div>
        </div>
        
        <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2">
          <i class="fas fa-cog translate-middle-x fa-2x text-primary"></i>
        </div>
      </div>


      <ul class="nav nav-pills mt-2 mb-2 ">

        <li class="nav-item">
          <a class="nav-link active" href="#">For You</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item d-none d-sm-block">
          <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item d-none d-md-block ">
          <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item d-none d-xxl-block">
          <a class="nav-link" href="#">Entertainment</a>
        </li>
      </ul>


      <div class="position-relative">
        <img src="../../images/starship.webp" width="100%">
        <h3 class="position-absolute bottom-0 text-secondary">SpaceX's Starship</h3>
      </div>     


    
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}

export default ExploreComponent;

