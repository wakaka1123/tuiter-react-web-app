import React from "react";
import {useState} from "react";

import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {editProfile} from "../profile/profile-reducer";


const EditProfile = () => {

  const profileInfo = useSelector(state => state.profile)
  const [fullName, setFullName] = useState(profileInfo.firstName + " " + profileInfo.lastName)
  const [editDob, setEditDob] = useState(false)
  const tog =()=>{
    setEditDob(!editDob)
  }
  const [profile,setProfile] = useState(profileInfo)
  const saveProfile = (profile)=>{
    const nameLength = fullName.split(' ').length
    if(nameLength >=2) {
      const newFirstName= fullName.split(' ')[0]
      const newLastname= fullName.split(' ')[1]
      dispatch(editProfile({...profile,firstName:newFirstName,lastName:newLastname}))
    } else {
      alert("First name and last name are both required, pls split them with space")
      return
    }
    navigate("/tuiter/profile")
  }


  const dispatch = useDispatch()
  const navigate = useNavigate()



  return(
      <div>
        <button type="button" className="btn-close" aria-label="Close" onClick={() => navigate("/tuiter/profile")}/>
        <b> Edit profile</b>
        <button className="rounded-pill btn btn-dark float-end fw-bold" onClick={()=>saveProfile(profile)}>Save</button>
        <br/><br/>

        <div className="position-relative">
          <img src="/images/banner.jpeg" className="w-100"/>
          <div>
            <img src="/images/avatar.png" height={96} width={96} className="position-absolute wd-move-above rounded-circle"/>
          </div>
        </div>

        <br/><br/><br/>

        <ul className="list-group">
            <li className="list-group-item">
                <div>Name</div>
                <textarea className="form-control border-0" onChange={(e)=>{setFullName(e.target.value)}} value ={fullName}/>

            </li>
          <br/>
          <li className="list-group-item">
            <div>Bio</div>
            <textarea className="form-control border-0" onChange={(e)=>setProfile({...profile,bio:e.target.value})} value ={profile.bio}/>
          </li>
          <br/>
          <li className="list-group-item">
            <div>Location</div>
            <textarea className="form-control border-0" onChange={(e) => setProfile({...profile, location: e.target.value})} value ={profile.location}/>
          </li>
          <br/>
          <li className="list-group-item">
            <div>Website</div>
            <textarea className="form-control border-0" onChange={(e)=>setProfile({...profile,website:e.target.value})} value ={profile.website}/>
          </li>
          {/*<EditProfileList/>*/}
        </ul>
        <br/>
        <div>Birth date . <span className="text-primary text-decoration-underline" onClick={tog}>Edit</span></div>
        {
          !editDob && <div>{profile.dateOfBirth}</div>
        }

        {
            editDob &&<textarea onChange={(e)=>setProfile({...profile,dateOfBirth:e.target.value})} value={profile.dateOfBirth}/>
        }
        <br/><br/>

      </div>
  );
};
export default EditProfile;