import ChannelCard from './ChannelCard';
import ChannelForm from './ChannelForm';

function ChannelsLists({ channels, onAddChannel }) {
    

  const channelCards = channels.map( (channel)=>{
    return <ChannelCard key={channel.id} channel={channel} />
})   

  
    return (
      <div className='channels-container'>
        <div className="channels-wrapper"></div>
         {channelCards}
        <ChannelForm onAddChannel={onAddChannel} />
        <br />
        
      </div>  
    )
  }
  
  export default ChannelsLists;