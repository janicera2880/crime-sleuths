import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PostForm from "./PostForm";


const ChannelContainer = ({ channels, onAddPost }) => {
  const params = useParams();
  const channelId = parseInt(params.id);
  const showChannel = channels.find((channel) => channel.id === channelId);

  const renderPosts =
  showChannel &&
  showChannel.posts.map((post) => (
    <div className="poster-card" key={post.id}>
      <h4>{post.title}</h4>
      {post.image && <img src={post.image} alt="imgPost" />}
      <br />
      <span>{post.short_content}</span>
      <br />
      <br />
      <Link to={`/posts/${post.id}`}>click to view full story</Link>
    </div>
  ));

  return (
    <div className="channel-box">
      <div className="container-box">
        <h3>
          <em>{showChannel ? showChannel.name : ""}</em>
        </h3>
        <p>{showChannel ? showChannel.description : ""}</p>
        <div className="poster-grid">{renderPosts}</div>
        <br />
        {showChannel && <PostForm onAddPost={onAddPost} />}
      </div>
    </div>
  );
};


export default ChannelContainer;
