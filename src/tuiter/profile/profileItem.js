import React from "react";
import { useNavigate } from 'react-router-dom';

const ProfileItem = (
    {
      profile = {
        "firstName": "Jose", "lastName": "Annunziato", "handle": "@jannunzi",
        "profilePicture": "avatar.png", 	"bannerPicture": "banner.jpeg",
        "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
        "website": "youtube.com/webdevtv",
        "location": "Boston, MA",	"dateOfBirth": "7/7/1968",	"dateJoined": "4/2009",
        "followingCount": 340,	"followersCount": 223
      }
    }
) => {
  const navigate = useNavigate();

  return(
      <div>
        <div className="position-relative">
          <img src={`/images/${profile.bannerPicture}`} className="w-100"/>
          <div>
            <img src={`/images/${profile.profilePicture}`} height={96} width={96} className="position-absolute wd-move-above rounded-circle"/>
          </div>

          <button onClick={()=>navigate("/tuiter/edit-profile")} className="rounded-pill btn btn-outline-secondary mt-2 ps-3 pe-3 float-end fw-bold">Edit profile</button>

        </div><br/><br/><br/>

        <div>
          <h3>{profile.firstName} {profile.lastName}</h3>
          <div>{profile.handle}</div>
          <br/>
          <p>
            {profile.bio}
          </p>
          <div className="row">
            <div className="col-auto"><i className="bi bi-geo-alt">{profile.location}</i></div>
            <div className="col-auto"><i className="bi bi-balloon">{profile.dateOfBirth}</i></div>
            <div className="col-auto"><i className="bi bi-calendar2-week">{profile.dateJoined}</i></div>


          </div>
          <br/>
          <p>
            <b>{profile.followingCount}</b> Following <b>{profile.followersCount}</b> Followers
          </p>


        </div>
      </div>
  );
};
export default ProfileItem;

