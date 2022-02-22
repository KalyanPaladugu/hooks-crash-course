import React, { useContext, useState } from 'react'
import Messages from './Messages'

export  const MessagesContext=React.createContext();



export function useDetails(){
    return useContext(MessagesContext);
}






export default function Chat() {
   const [username,setUsername]=useState("Kalyan")
  return (
    <div>
        <MessagesContext.Provider value={{username,setUsername}}>
        <Messages  />    
        </MessagesContext.Provider>
        
    </div>
  )
}
