import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { UserContext } from "../../Context/UserContext";

function ChannelCard({ channel }) {
  const { user } = useContext(UserContext);

  return(
    <div>
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