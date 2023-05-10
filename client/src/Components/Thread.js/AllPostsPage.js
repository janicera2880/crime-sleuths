import React, { useEffect, useContext, useState } from "react";
import { PostsContext } from "../Context/PostsContext";

const AllPostsPage = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setPosts]);

  if (!posts) {
    return <p>Loading posts...</p>;
  }

  const currentPost = posts[currentIndex];

  const nextPost = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="all-post">
      <div className="view-card" key={currentPost.id}>
        <h3>{currentPost.title}</h3>
        {currentPost.image && <img src={currentPost.image} width="500" height="400" alt="Post-card" />}
        <p>{currentPost.content}</p>
        <h4>Author: {currentPost.user.username}</h4>
        <h5>Date: {new Date(currentPost.created_at).toLocaleDateString()}</h5>
      </div>
      <br />
      <button onClick={nextPost} disabled={currentIndex === posts.length - 1}>
        Next
      </button>
    </div>
  );
};

export default AllPostsPage;
