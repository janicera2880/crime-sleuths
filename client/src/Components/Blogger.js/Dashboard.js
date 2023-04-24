import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function Dashboard(){
    const { user } = useContext(UserContext);
   

    function ProfileComponent(){
        return(
        <div>
            {user.username} 's Dashboard
            <br />
            <br />
            {user.image_url}
            <br />
           
            <br />
            Bio:
            <br />
            {user.bio}
            <br />
            Location:
            <br />
            {user.location}
            
            <Link to={"/user/posts"}> Your Reviews </Link>
            <br />
            <Link to={"/user/channels"}> Your Channels </Link>
            <br />
            <br />
            <Link to={"/updateblogger"}><button>Edit Profile</button></Link>
        </div>
        )
    }

    return(
        <div>
            {user? <ProfileComponent /> : ""}
        </div>
    )
}

export default Dashboard;