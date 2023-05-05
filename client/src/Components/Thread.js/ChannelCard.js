import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { UserContext } from "../Context/UserContext";

function ChannelCard({ channel }) {
  // Access the UserContext using the useContext hook
  const { user } = useContext(UserContext);

  return(
  /*Render the channel name and description in a div.
   If a user is logged in, render a Link to the channel with the channel name as the text.
  If no user is logged in, just render the channel name as the text.*/
    <div className="channel-card">
        { user?
         <Link to={`/channels/${channel.id}`}><h4>{ channel.name }</h4></Link>
        :
        <h4> {channel.name} </h4>
         }
        <span>{ channel.description }</span>
    </div>
)
}

export default ChannelCard;