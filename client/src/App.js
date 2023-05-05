import './App.css';
import { UserContext } from './Components/Context/UserContext';
import {useContext, useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Blogger.js/NavBar";
import Home from './Components/Blogger.js/Home';
import SignupForm from "./Components/Blogger.js/SignupForm";
import LoginForm from "./Components/Blogger.js/LoginForm";
import Dashboard from "./Components/Blogger.js/Dashboard";
import EditDashboard from "./Components/Blogger.js/EditDashboard";
import ChannelsLists from "./Components/Thread.js/ChannelsLists";
import ChannelContainer from "./Components/Thread.js/ChannelContainer";
import UserPostDetails from "./Components/Thread.js/UserPostDetails";
import PostLists from './Components/Thread.js/PostLists';
import { PostsContext } from './Components/Context/PostsContext';
import UserChannelPage from './Components/Thread.js/UserChannelPage';



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
  }, [setUser]);

  useEffect( ()=>{
    if (user != null){
      fetch(`/users/${user.id}/posts`).then(r=>r.json()).then(data=>{
        setUserPosts(data);
      })
    }
  }, [user, setUserPosts]);

  useEffect( ()=>{
    fetch("/channels").then( r => r.json() ).then( (data)=>{
        setChannels(data);
    })
  }, []);

  useEffect( ()=>{
    fetch(`/posts`).then( r => r.json() ).then( (data)=>{
      setPosts(data);
    })
  }, [setPosts])

  function handleAddChannel(newChannel) {
    setChannels([newChannel, ...channels]);
  }
  
  
  return (
    
    <BrowserRouter>
      <div className="App">
      
        <NavBar />
        <Routes>
          {/* Real routes begin here */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/user" element={<Dashboard />} />
          <Route path="/updatedashboard" element={<EditDashboard />} />
          <Route path="/channels" element={<ChannelsLists channels={channels} onAddChannel={handleAddChannel}/>} />
          <Route path="/channels/:id" element={<ChannelContainer channels={channels} />} />
          <Route path="/user/posts" element={<PostLists />} />
          <Route path="/posts/:id" element={<UserPostDetails />} />
          <Route path="/user/channels" element={<UserChannelPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;