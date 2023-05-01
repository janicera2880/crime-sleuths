import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/post/${id}`)
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
      <div>
        <br />
        Post by {post.user.username}
        <br />
        {post.title}
        <br />
        <br />
        <Link to={`/users/${post.user.id}`}>View Full User Info</Link>
      </div>
    );
  }

  return (
    <div>
      {post ? <PostComponent /> : "Loading post..."}
    </div>
  );
}

export default PostDetails;
