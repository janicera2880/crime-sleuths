import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

function Nametag(){
    const { user } = useContext(UserContext)

    return(
        <span>
             <button>Hi, { user.username } !</button>
        </span>
    )
}

export default Nametag;