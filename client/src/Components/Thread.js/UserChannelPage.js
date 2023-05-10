import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import channelImg from "../Images/mychannel.gif"



function UserChannelPage(){
    const { user } = useContext(UserContext);

    let myChannel;
    if (user && user.channels) {
        myChannel = user.channels.map((channel) => {
            console.log(channel);

        return(
                <div key={channel.id}>
                    <h4>{channel.name}</h4>
                    <br />
                    <p>{channel.description}</p>
                    <br />
                    <br />
                    _______________________________
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            )
        });
    } else {
        myChannel = <p>No channels found. Create a new channel to get started!</p>;
    }

    return (
        <div className="box">
            <h2>{user ?  `Hello ${user.username}` : 'Loading...'}</h2>
            <img id="channelImg" src={channelImg} width="600" height="220" alt="channelImg" />
          
          <br />
          {myChannel}
          <Link to={"/channels"}>Create New Channel</Link>
          <br />
          {user && (
            <Link to={"/user"}>{user.username}'s Dashboard</Link>
          )}
          <br />
        </div>
      );
}

export default UserChannelPage;