import React, { useContext} from "react";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import Nametag from "./Nametag";
import LoginLogoutToggle from "./LoginLogoutToggle";

function NavBar(){
   

    const { user } = useContext(UserContext);

    function NametagButton(){
        return(
            <Link to={"/user"}><Nametag /></Link>
        )
    }

    return(
        <div className="navbar">
            <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/posts"> Recent Posts</NavLink>
            <NavLink to="/channels">All Channels</NavLink>
          
            <span>
                { user? <NametagButton /> : <NavLink to="/signup"><button>Sign Up</button></NavLink> }
                <LoginLogoutToggle />
            </span>
            </nav>
        </div>
    )
}

export default NavBar;