import ChannelCard from './ChannelCard';
import ChannelForm from './ChannelForm';

function ChannelsLists({ channels, onAddChannel }) {
    

  const channelCards = channels.map( (channel)=>{
    return <ChannelCard key={channel.id} channel={channel} />
})   

  
    return (
      <div>
         {channelCards}
        <ChannelForm onAddChannel={onAddChannel} />
        <br />
        
      </div>  
    )
  }
  
  export default ChannelsLists;