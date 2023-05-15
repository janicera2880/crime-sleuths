import './App.css';
import { UserContext } from './Components/Context/UserContext';
import {useContext, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Blogger.js/NavBar";
import Home from './Components/Blogger.js/Home';
import SignupForm from "./Components/Blogger.js/SignupForm";
import LoginForm from "./Components/Blogger.js/LoginForm";
import Dashboard from "./Components/Blogger.js/Dashboard";
import ChannelsLists from "./Components/Thread.js/ChannelsLists";
import ChannelContainer from "./Components/Thread.js/ChannelContainer";
import UserPostDetails from "./Components/Thread.js/UserPostDetails";
import PostLists from './Components/Thread.js/PostLists';
import { PostsContext } from './Components/Context/PostsContext';
import { ChannelsContext } from "./Components/Context/ChannelsContext";
import UserChannelPage from './Components/Thread.js/UserChannelPage';
import AllPostsPage from './Components/Thread.js/AllPostsPage';



function App() {
  const { user, setUser } = useContext(UserContext);
  const { posts, userPosts, setPosts, setUserPosts } = useContext(PostsContext);
  const { channels, setChannels } = useContext(ChannelsContext);
  
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
  }, [setChannels]);

  useEffect( ()=>{
    fetch(`/posts`).then( r => r.json() ).then( (data)=>{
      setPosts(data);
    })
  }, [setPosts]);

  function handleAddChannel(newChannel) {
    setChannels([newChannel, ...channels]);
  }
  
  
  function handleAddPost(newPost) {
    setPosts((prevPosts) => {
      if (prevPosts && Array.isArray(prevPosts)) {
        return [newPost, ...prevPosts];
      } else {
        return [newPost];
      }
    });
  
  setUserPosts((prevUserPosts) => {
    if (prevUserPosts && Array.isArray(prevUserPosts)) {
      return [newPost, ...prevUserPosts];
    } else {
      return [newPost];
    }
  });
  setChannels((prevChannels) => {
    if (prevChannels && Array.isArray(prevChannels)) {
      return prevChannels.map((channel) => {
        if (channel.id === newPost.channel.id) {
          // Add the new post to the channel's posts array
          const updatedChannel = { ...channel };
          updatedChannel.posts = [newPost, ...channel.posts];
          return updatedChannel;
        } else {
          return channel;
        }
      });
    } else {
      return prevChannels;
    }
  });

  // Fetch channel posts again
  
  fetch(`/channels/${newPost.channelId}/posts`)
    .then((response) => response.json())
    .then((data) => {
      // Update the channel posts state
      setPosts(data);
    });
  } 
   function handleDeletePost(deletedPost) {
      const newPostArray = userPosts.filter((post) => {
        return post.id !== deletedPost.id;
      });
    
      const updatedChannelArray = channels.map((channel) => {
        if (channel.id === deletedPost.channel_id) {
          return {
            ...channel,
            posts: channel.posts.filter((post) => post.id !== deletedPost.id)
          };
        } else {
          return channel;
        }
      });
    
      setUserPosts(newPostArray);
      setChannels(updatedChannelArray);
    }

    function handleUpdatePost(updatedPost) {
      console.log(updatedPost);
    
      const updatedChannelArray = channels.map((channel) => {
        if (channel.id === updatedPost.channel_id) {
          return {
            ...channel,
            posts: channel.posts.map((post) => {
              if (post.id === updatedPost.id) {
                return updatedPost;
              } else {
                return post;
              }
            }),
          };
        } else {
          return channel;
        }
      });
    
      const updatedPostArray = userPosts.map((post) => {
        if (post.id === updatedPost.id) {
          return updatedPost;
        } else {
          return post;
        }
      });
    
      setChannels(updatedChannelArray);
      setUserPosts(updatedPostArray);
    }
    
  return (
    
    <BrowserRouter>
      <div className="App">
      
        <NavBar />
        <Routes>
          {/* routes begin here */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/user" element={<Dashboard />} />
          <Route path="/channels" element={<ChannelsLists channels={channels} onAddChannel={handleAddChannel}/>} />
          <Route path="/channels/:id" element={<ChannelContainer channels={channels} onAddPost={handleAddPost}/>} />
          <Route path="/user/posts" element={<PostLists posts={posts} userPosts={userPosts} setUserPosts={setUserPosts} handleDeletePost={handleDeletePost} handleUpdatePost={handleUpdatePost} channels={channels} setChannels={setChannels}/>} />
          <Route path="/posts" element={<AllPostsPage />} />
          <Route path="/posts/:id" element={<UserPostDetails />} />
          <Route path="/user/channels" element={<UserChannelPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;