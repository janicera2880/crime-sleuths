import React, { useState, useEffect } from 'react';
import ChannelCard from './ChannelCard';

function ChannelsLists() {
    const [allChannels, setAllChannels] = useState([])

    useEffect(() => {
        fetch("/channels")
        .then(response => response.json())
        .then(data => {
            setAllChannels(data)
        })
      }, [])


      const channels = allChannels.map(channel => {
        return(
            <ChannelCard
            key={channel.id}
            id={channel.id}
            name={channel.name}
            description={channel.description}
            />
        )
    })
  
    return (
      <div>
        <ul className="channelslists">{channels}</ul>      
      </div>  
    )
  }
  
  export default ChannelsLists;