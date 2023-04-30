import PostForm from "./PostForm";
import { Link, useParams } from "react-router-dom";

const ChannelContainer = ({ channels, onAddPost }) => {
    // console.log(channels);
  
    const params = useParams();
    // console.log({ id });
  
    const showChannel = channels.find(channel => channel.id === parseInt(params.id)) || null;

   
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
        <PostForm onAddPost={onAddPost} />
        <h1>
          Create Post To This Channel
          <br></br>
          <em>{showChannel ? showChannel.name : ""}</em>
        </h1>
        {renderPosts}
      </div>
    );
  };
  
  export default ChannelContainer;