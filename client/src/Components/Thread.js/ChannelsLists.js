import ChannelCard from './ChannelCard';
import ChannelForm from './ChannelForm';
import channelImg from "../Images/channellogo.jpeg";

function ChannelsLists({ channels, onAddChannel }) {
    

  const channelCards = channels.map( (channel)=>{
    return <ChannelCard key={channel.id} channel={channel} />
})   

  
    return (
      <div className='channels-container'>
        <img id="channellogo" src={channelImg} width="600" height="400" alt="channellogo"/> 
        <br />
        <br />
        <br />
          <div className="channels-wrapper"></div>
          {channelCards}
          <br />
          <ChannelForm onAddChannel={onAddChannel} />
          <br />
        
      </div>  
    )
  }
  
  export default ChannelsLists;