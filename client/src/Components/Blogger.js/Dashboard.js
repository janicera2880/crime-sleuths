import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function Dashboard(){
    const { user } = useContext(UserContext);
   

    function DashboardView(){
        return(
        <div className="dashboard">
            {/* Display the user's username */}
            <h4>{user.username} 's Dashboard</h4>
            
            {/* Display the user's profile image */}
            <br />
            <img src={user.image_url} width="300" height="400"alt="Profile" />
            <br />
            <br />

            {/* Display the user's bio */}
            <h3>Bio: </h3>
            <br />
            {user.bio}
            <br />
            <br />
             {/* Display the user's location */}
             <h3>Location:</h3>
            <br />
            {user.location}
            <br />
            <br />
            <br />
            <Link to={"/user/posts"}>My Posts</Link> <Link to={"/user/channels"}>My Channels</Link> <Link to={"/updateuser"}>Edit Profile</Link>
            
            
            
           
        </div>
        )
    }

    return(
        <div >
            {/* If user is logged in, display DashboardView  using Ternary Operation*/}
            {user? <DashboardView /> : ""}
        </div>
    )
}

export default Dashboard;