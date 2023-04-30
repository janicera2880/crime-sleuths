import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function UserChannelPage(){
    const { user } = useContext(UserContext);

    const myChannel = user.channels.map( (channel) => {
        console.log(channel)
        return(
            <div key={channel.id}>
              
                <h4>{channel.name}</h4>
                <p>{channel.description}</p>
              
              
            </div>
        )
    })
    return(
        <div>
            <h2>{user.username}'s Channels</h2>
            <br />
            <Link to={"/user"}>Dashboard</Link>
            <br />
            {myChannel}
            <br />
        </div>
    )
}

export default UserChannelPage;