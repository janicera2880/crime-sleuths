import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function Dashboard(){
    const { user } = useContext(UserContext);
   

    function DashboardView(){
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
            
            <Link to={"/user/posts"}> Your Posts </Link>
            <br />
            <Link to={"/channels"}> Reading List </Link>
            <br />
            <br />
            <Link to={"/updateblogger"}><button>Edit Profile</button></Link>
        </div>
        )
    }

    return(
        <div>
            {user? <DashboardView /> : ""}
        </div>
    )
}

export default Dashboard;