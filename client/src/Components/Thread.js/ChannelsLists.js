import ChannelCard from './ChannelCard';
import ChannelForm from './ChannelForm';

function ChannelsLists({ onAddChannel }) {
    

  const channelCards = channels.map( (channel)=>{
    return <ChannelCard key={channel.id} channel={channel} />
})   

  
    return (
      <div>
        <ChannelForm onAddChannel={onAddChannel} />
        {channelCards}      
      </div>  
    )
  }
  
  export default ChannelsLists;