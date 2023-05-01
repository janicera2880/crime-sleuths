import PostForm from "./PostForm";
import { Link, useParams } from "react-router-dom";

const ChannelContainer = ({ channels, onAddPost }) => {
    // console.log(channels);
    
    // get the channel ID from the URL parameters
    const params = useParams();
    // console.log({ id });
  
    // find the channel object that matches the ID
    const showChannel = channels.find(channel => channel.id === parseInt(params.id)) || null;

   // if the channel exists, render the list of posts
    const renderPosts = showChannel ? showChannel.posts.map((post) => (
      <li key={post.id}>
        <span>
          <Link to={`/users/${post.user.id}`}>{post.user.username}:</Link>
        </span>{" "}
        "{post.title}"
      </li>
    ))
  : null;
  
    return (
      <div>
        {/* render the post form */}
        <PostForm onAddPost={onAddPost} />

        {/* render the channel name */}
        <h1>
          Create Post To This Channel
          <br></br>
          <em>{showChannel ? showChannel.name : ""}</em>
        </h1>

        {/* render the list of posts */}
        {renderPosts}
      </div>
    );
  };
  
  export default ChannelContainer;