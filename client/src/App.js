import Home from './Components/Home';
import './App.css';
import { UserContext } from './Context/UserContext';
import {useContext, useEffect} from "react";




function App() {
  const { setUser } = useContext(UserContext);

  useEffect( ()=>{
    fetch("/me").then( (r) => {
        if(r.ok){
            r.json().then( (data) => setUser(data) );
        }
    });
  }, [] )
  
  
  return (
    <div>
       
      <Home />
     
    </div>
  );
}

export default App;
