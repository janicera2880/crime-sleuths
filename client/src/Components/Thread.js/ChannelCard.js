import React from "react";
import { Link } from "react-router-dom"

function ChannelCard({name, id}) {

  return (
    <li className="ChannelCard">
      <p><span style={{fontSize: "x-large"}}>{name}</span></p>
      <Link className="channelsLink" to={`/channels/${id}`}>Get Channels Details!</Link>
    </li>
    
  )
}

export default ChannelCard;