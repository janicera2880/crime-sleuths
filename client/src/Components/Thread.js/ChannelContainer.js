import React from "react";
import { Link, useParams } from "react-router-dom";
import PostForm from "./PostForm";

const ChannelContainer = ({ channels, onAddPost }) => {
  const params = useParams();
  const channelId = parseInt(params.id);
  const showChannel = channels.find((channel) => channel.id === channelId);

  const renderPosts =
    showChannel &&
    showChannel.posts.map((post) => (
      <li key={post.id}>
        <span>
          {post.user?.id && (
            <Link to={`/users/${post.user.id}`}>{post.user.username}:</Link>
          )}
        </span>{" "}
        <strong>{post.title}</strong> - {post.image && <img src={post.image} width="400" height="400" alt="Post" />}{" "}
        {post.content}
      </li>
    ));

  return (
    <div className="mypost-container">
      <div className="mypost-wrapper"></div>

      <h3>
      <em> Channel: {showChannel ? showChannel.name : ""}</em>
      </h3>
      <br />
      <br />
      <h4>Recent Posts:</h4>
      {renderPosts}
      <br />
      <br />

     
      {/* Add the following check for showChannel before rendering PostForm */}
      {showChannel && <PostForm onAddPost={onAddPost} />}
    </div>
  );
};

export default ChannelContainer;
