import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function LoginLogoutToggle(){

    const { user, setUser } = useContext(UserContext);

    function logOut(){
        fetch("/logout",{
            method: "DELETE"
        }).then( ()=> {
            setUser(null)
            // debugger;
        })
    }

    function ToLogin(){
        return (
            <Link to={"/login"}>
                <button> Log In </button>
            </Link>
        )
    }
    function ToLogout(){
        return (
            <Link to={"/"}>
                <button onClick={logOut}>
                    Log Out
                </button>
            </Link>

        )
    }
    
    return(
        <span>
            { user? <ToLogout/> : <ToLogin/> }
        </span>
    )
}

    export default LoginLogoutToggle;