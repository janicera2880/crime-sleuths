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
      <div>
        <br />
        Article created by {post.user.username},
        <br />
        {post.title}
        <br />
        {post.image}
        <br />
        {post.content}
      </div>
    );
  }

  return (
    <div>
      {post ? <PostComponent /> : "Loading post..."}
    </div>
  );
}

export default UserPostDetails;
