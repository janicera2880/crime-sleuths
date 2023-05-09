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
    <div className="post-card" key={post.id}>
      <strong>{post.title}</strong>
      {post.image && <img src={post.image} alt="imgPost" />}
      <span>{post.short_content}</span>
      <br />
      <br />
      <Link to={`/posts/${post.id}`}>click to view full story</Link>
    </div>
  ));

  return (
    <div className="channel-container">
      <div className="container-box">
        <h3>
          <em>{showChannel ? showChannel.name : ""}</em>
        </h3>
        <p>{showChannel ? showChannel.description : ""}</p>
        <div className="post-grid">{renderPosts}</div>
        <br />
        {showChannel && <PostForm onAddPost={onAddPost} />}
      </div>
    </div>
  );
};


export default ChannelContainer;
