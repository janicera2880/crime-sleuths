import React, { useContext } from "react";
import headerImg from "../headerAnimate.gif"
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function Home(){
    const {user} = useContext(UserContext);
    
function WelcomePage(){
    return(
      <div>   
      <img id="logoImg" src={headerImg} alt="crimesleuthsImg"/>
    <p>
        Welcome, {user.username}!
    </p>
    </div>
    )
}

function LoginMessage(){
    return(
        <p>
            Please <Link to={"/login"}>log in</Link>
        </p>
    )
}

function message(){
    if ( user === null ) return <LoginMessage />
    else return <WelcomePage />
}
    return(
        <div>
            <h1>Home</h1>
            <br />
            {message()}
        </div>
    )
}

export default Home;