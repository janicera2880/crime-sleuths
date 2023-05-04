import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function LoginLogoutToggle(){

    //Destructure user and setUser from UserContext using useContext hook
    const { user, setUser } = useContext(UserContext);

    function handleLogout(){
        // Send DELETE request to server to logout the user
        fetch("/logout",{
            method: "DELETE"
        }).then( ()=> {
            // Set user to null to indicate that no user is logged in
            setUser(null);
            // debugger;
        })
    }

    function ToLogin(){
        // Return a link to the login page
        return (
            <Link to={"/login"}>
                <button> Login </button>
            </Link>
        )
    }
    function ToLogout(){
        // Return a link to the homepage with a logout button
        return (
            <Link to={"/"}>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </Link>

        )
    }
    
    // If user is logged in, render the ToLogout component, else render the ToLogin component
    return <span>{user ? <ToLogout /> : <ToLogin />}</span>;
}

    export default LoginLogoutToggle;