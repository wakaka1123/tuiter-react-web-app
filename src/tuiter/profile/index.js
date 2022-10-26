import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import ProfileItem from "./profileItem";




const ProfileComponent = () => {
  const profileInfo = useSelector(state => state.profile)
  // console.log(profileInfo)

  return(
            <ProfileItem profile={profileInfo}/>
  );
};
export default ProfileComponent;
