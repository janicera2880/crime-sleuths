import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { PostsContext } from "../Context/PostsContext";
import UpdatePostForm from "./UpdatePostForm";

function PostLists({ }) {
  // Get the user and userPosts context
  const { user } = useContext(UserContext);
  const { userPosts, setUserPosts } = useContext(PostsContext);

  // Function to delete post
  function handleDeletePost(post) {
    fetch(`/users/${user.id}/post/${post.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((r) => r.json())
      .then(() => {
        // Filter out the deleted post from the userPosts array
        const newPostArray = userPosts.filter((findPost) => {
          return findPost.id !== post.id;
        });
        // Update the userPosts context with the new array
        setUserPosts(newPostArray);

        // Remove the post from the channel it belongs to
        const channelID = post.channel.id;
        fetch(`/channels/${channelID}/posts/${post.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        });
      });
  }

  // Function to update a post
  function updatePost(updatedPost, postID) {
    fetch(`/users/${user.id}/posts/${postID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((r) => r.json())
      .then((post) => {
        const newPostArray = [...userPosts];
        newPostArray.map((r) => {
          if (r.post.id === post.id) {
            r.title = post.title;
            r.image = post.image;
            r.content = post.content;
          }
          return r;
        });

        setUserPosts(newPostArray);
      });
  }

  // Function to render the post components
  const postComponent = () => {
    if (!Array.isArray(userPosts) || userPosts.length < 1) {
      return <span>No Post Found!</span>;
    }
    return userPosts.map((post) => {
      // Function to handle the delete button click
      function handleDeleteClick() {
        handleDeletePost(post);
      }

      // Function to handle the update form submission
      function handleUpdate(newPost) {
        updatePost(newPost, post.id);
      }

        // Render the post with the update form and delete button
            return (
                
                <div className='posts-list'key={post.id}>
                    <h4>Channel : {post.channel.name}</h4>
                    <br />
                    <h3>{post.title}</h3>
                    <br />
                    <img src={post.image} width="400" height="300" alt="Post" />
                    <br />
                    {post.content}
                    <br />
                    <br />
                    <UpdatePostForm post={post} updatePost={handleUpdate} />
                    <br />
                    <button onClick={handleDeleteClick}>Delete Post</button>
                    <br />
                    <br />
                </div>
            );
        });
    };
    // Render the PostList component with the user's posts and dashboard link
    return(
        <div className="post-component">
    
            {postComponent()}

            <Link to={"/user"}>Back To Dashboard</Link>
        </div>
    );
}



export default PostLists;