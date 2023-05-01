import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function Dashboard(){
    const { user } = useContext(UserContext);
   

    function DashboardView(){
        return(
        <div>
            {/* Display the user's username */}
            {user.username} 's Dashboard
            
            {/* Display the user's profile image */}
            <br />
            {user.image_url}
            <br />
            <br />

            {/* Display the user's bio */}
            Bio:
            <br />
            {user.bio}
            <br />
            
             {/* Display the user's location */}
            Location:
            <br />
            {user.location}
            
            <Link to={"/user/posts"}>My Posts</Link>
            <br />
            <Link to={"/user/channels"}>My Channels</Link>
            <br />
            <Link to={"/updateuser"}><button>Edit Info</button></Link>
           
        </div>
        )
    }

    return(
        <div>
            {/* If user is logged in, display DashboardView  using Ternary Operation*/}
            {user? <DashboardView /> : ""}
        </div>
    )
}

export default Dashboard;