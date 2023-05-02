import './App.css';
import { UserContext } from './Context/UserContext';
import {useContext, useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from './Components/Home';
import SignupForm from "./Components/Blogger/SignupForm";
import LoginForm from "./Components/Blogger/LoginForm";
import Dashboard from "./Components/Blogger/Dashboard";
import EditDashboard from "./Components/Blogger/EditDashboard";
import ChannelsLists from "./Components/Thread/ChannelsLists";
import ChannelContainer from "./Components/Thread/ChannelContainer";
import UserPostDetails from "./Components/Thread/UserPostDetails";
import PostLists from './Components/Thread/PostLists';



function App() {
  const { user, setUser } = useContext(UserContext);
  const { setPosts, setUserPosts } = useContext(PostsContext);
  const [channels, setChannels] = useState([]);


  useEffect( ()=>{
    fetch("/me").then( (r) => {
        if(r.ok){
            r.json().then( (data) => setUser(data) );
        }
    });
  }, []);

  useEffect( ()=>{
    if (user != null){
      fetch(`/users/${user.id}/posts`).then(r=>r.json()).then(data=>{
        setUserPosts(data);
      })
    }
  }, [user]);

  useEffect( ()=>{
    fetch("/channels").then( r => r.json() ).then( (data)=>{
        setChannels(data);
    })
  }, []);

  function handleAddChannel(newChannel) {
    setChannels([newChannel, ...channels]);
  }
  
  
  return (
    
    <BrowserRouter>
      <div className="App">

        <NavBar />
        <Routes>
          {/* Real routes begin here */}
          <Route path="/user/channels" element={<UserChannelPage />} />
          <Route path="/user/posts" element={<PostLists />} />
          <Route path="/posts/:id" element={<UserPostDetails />} />
          <Route path="/channels/:id" element={<ChannelContainer />} />
          <Route path="/channels" element={<ChannelsLists />} />
          <Route path="/updatedashboard" element={<EditDashboard />} />
          <Route path="/user" element={<Dashboard />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;