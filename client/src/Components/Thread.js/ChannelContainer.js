import React from "react";
import { Link, useParams } from "react-router-dom";
import PostForm from "./PostForm";

const ChannelContainer = ({ channels, onAddPost }) => {
  const params = useParams();
  const showChannel = channels.find(
    (channel) => channel.id === parseInt(params.id)
  ) || null;

  const renderPosts =
    showChannel &&
    showChannel.posts.map((post) => (
      <li key={post.id}>
        <span>
          {post.user?.id && (
            <Link to={`/users/${post.user.id}`}>{post.user.username}:</Link>
          )}
        </span>{" "}
        <strong>{post.title}</strong> - {post.image && <img src={post.image} alt="Post" />} 
        {post.content}
      </li>
    ));

  return (
    <div className="mypost-container">
      <div className="mypost-wrapper"></div>

      <h1>
        Create Post To This Channel
        <br />
        <br />
        <em>{showChannel ? showChannel.name : ""}</em>
      </h1>

      {renderPosts}
      <br />
      <br />

      <PostForm onAddPost={onAddPost} />
    </div>
  );
};

export default ChannelContainer;
