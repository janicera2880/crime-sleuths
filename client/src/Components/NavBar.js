import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import Nametag from "./Blogger.js/Nametag";
import LoginLogoutToggle from "./Blogger.js/LoginLogoutToggle";

function NavigationBar(){
   

    const { user } = useContext(UserContext);

    function NametagButton(){
        return(
            <Link to={"/user"}><Nametag /></Link>
        )
    }

    return(
        <div>
            <span>
                <h4>Navigation</h4>
                <Link to={"/"}> Home </Link> ~|~
                <Link to={"/posts"}> Recent Posts </Link> ~|~
                <Link to={"/channels"}> All channels </Link> ~|~
            </span>
            <span>
                { user? <NametagButton /> : <Link to={"/signup"}><button> Sign Up </button></Link> }
                <LoginLogoutToggle />
            </span>
        </div>
    )
}

export default NavigationBar;