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
                <h5>Crime | Sleuths&trade;</h5>
            <br />
            { user? <NametagButton /> : <Link to="/signup">Signup Here</Link> }
                <br />
                <br />
            <LoginLogoutToggle />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <NavLink to="/"> Homepage</NavLink>
            <br />
            <br />
            <br />
            <NavLink to="/channels"> All Channels </NavLink>
            <br />
            <br />
            <br />
            <NavLink to="/posts"> Top Stories </NavLink>
            <div class="footer">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>Follow us on:</p>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
            <p>&copy;2023 CrimeSleuths. All rights reserved.</p>
            </div>
            
            </nav>
        </div>
    )
}

export default NavBar;