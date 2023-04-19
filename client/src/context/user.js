import react from "react";
import { useState } from "react";

const UserContext = react.createContext()


function UserProvider({ children }){
  const [user, setUser] = useState(null)
  
  return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

export {UserContext, UserProvider}