import React, { useEffect, useContext, useState } from "react";
import { PostsContext } from "../Context/PostsContext";

const AllPostsPage = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/posts")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching posts");
        }
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
        setError("Error fetching posts");
      });
  }, [setPosts]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!posts) {
    return <p>Loading posts...</p>;
  }

  const currentPost = posts[currentIndex];

  const nextPost = () => {
    if (currentIndex === posts.length - 1) {
      alert("You have reached the maximum page to read.");
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevPost = () => {
    if (currentIndex === 0) {
      alert("You are on the first page.");
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="all-post">
      <div className="view-card" key={currentPost.id}>
        <h3>{currentPost.title}</h3>
        {currentPost.image && (
          <img src={currentPost.image} width="500" height="400" alt="Post-card" />
        )}
        <p>{currentPost.content}</p>
        <h4>Author: {currentPost.user.username}</h4>
        <h5>Date Posted: {new Date(currentPost.created_at).toLocaleDateString()}</h5>
      </div>
      <br />
      <div>
        <button onClick={prevPost} disabled={currentIndex === 0}>
        &#8592; Back
        </button>
      
        <button onClick={nextPost} disabled={currentIndex === posts.length - 1}>
        Next &#8594;
        </button>
      </div>
    </div>
  );
};

export default AllPostsPage;

