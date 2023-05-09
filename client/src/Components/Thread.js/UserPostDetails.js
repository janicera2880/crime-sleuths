import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//this function is a React component that renders a post and the user who created it.
function UserPostDetails() {

  //useParams hook to retrieve the post ID from the URL.
  const { id } = useParams();
  const [post, setPost] = useState(null);


  /*useEffect hook to fetch the post data from the server when the component mounts
  updates the post state with the received data*/
  useEffect(() => {
    fetch(`/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  function PostComponent() {
    return (
      <div className="post-details-container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 className="post-title">{post.title}</h2>
        <div className="post-info">
          <span className="post-creator">Created by: {post.user.username}</span>
          <span className="post-date">Date: {new Date(post.created_at).toLocaleDateString()}</span>
        </div>
        {post.image && (
          <div className="post-image-container">
            <img src={post.image} alt="Post" className="post-image" />
          </div>
        )}
        <p className="post-content">{post.content}</p>
      </div>
    );
  }

  return <div className="user-post-details">{post ? <PostComponent /> : "Loading post..."}</div>;
}

export default UserPostDetails;