import React, { useState } from "react";

const ChannelsContext = React.createContext();

function ChannelsProvider({ children }){
    
    const [channels, setChannels] = useState(null);

    return(
        <ChannelsContext.Provider value={{channels, setChannels}}>
            {children}
        </ChannelsContext.Provider>
    );
}

export { ChannelsContext, ChannelsProvider };