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
            
            <Link to={"/user/posts"}> My Posts </Link>
            <br />
            <Link to={"/user/channels"}> Create New Post </Link>
            <br />
            
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