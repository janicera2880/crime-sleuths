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
          
                { user? <NametagButton /> : <NavLink to="/signup"> Sign Up </NavLink> }
                <br />
                <br />
                <br />
                <LoginLogoutToggle />
         
            <br />
            <br />
            <br />
            <br />
            <br />
            <NavLink to="/">Home</NavLink>
            <br />
            <br />
            <br />
            <br />
            <NavLink to="/posts"> Recent Posts</NavLink>
            <br />
            <br />
            <br />
            <br />
            <NavLink to="/channels">All Channels</NavLink>
          
            
            </nav>
        </div>
    )
}

export default NavBar;