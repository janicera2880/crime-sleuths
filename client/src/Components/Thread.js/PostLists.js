import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { PostsContext } from "../Context/PostsContext";
import UpdatePostForm from "./UpdatePostForm";
import { ChannelsContext } from "../Context/ChannelsContext";

function PostLists() {
  // Get the user and userPosts context
  const { user } = useContext(UserContext);
  const { userPosts, setUserPosts } = useContext(PostsContext);
  const { channels, setChannels } = useContext(ChannelsContext);

  // Function to delete post
  function handleDeletePost(deletedPost) {
    fetch(`/users/${user.id}/posts/${deletedPost.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deletedPost),
    })
      .then((r) => r.json())
      .then(() => {
        const newPostArray = userPosts.filter((post) => {
          return post.id !== deletedPost.id;
        });
        const updatedChannelArray = channels.map((channel) => {
          if (channel.id === deletedPost.channel_id) {
            return {
              ...channel,
              posts: channel.posts.filter((post) => post.id !== deletedPost.id)
            };
          } else {
            return channel;
          }
        });
        setUserPosts(newPostArray);
        setChannels(updatedChannelArray);
      });
  }

  function handleUpdate(updatedPost, postID) {
    fetch(`/users/${user.id}/posts/${postID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
    .then((r) => r.json())
    .then((updatedPost) => {
      if (channels) { // Check if channels is not null
        const updatedChannelArray = channels.map((channel) => {
          if (channel.id === updatedPost.channel_id) {
            return {
              ...channel,
              posts: channel.posts.map((post) => {
                if (post.id === updatedPost.id) {
                  return updatedPost;
                } else {
                  return post;
                }
              }),
            };
          } else {
            return channel;
          }
        });
        const updatedPostArray = userPosts.map((post) => {
          if (post.id === updatedPost.id) {
            return updatedPost;
          } else {
            return post;
          }
        });
        setChannels(updatedChannelArray);
        setUserPosts(updatedPostArray);
      }
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
      function handleUpdateFormSubmit(newPost) {
        handleUpdate(newPost, post.id);
      }

        // Render the post with the update form and delete button
            return (
                
                <div className='posts-list'key={post.id}>
                    <br />
                    <h3>{post.title}</h3>
                    <br />
                    <img src={post.image} width="400" height="300" alt="Post" />
                    <br />
                    {post.content}
                    <br />
                    <UpdatePostForm post={post} handleUpdateFormSubmit={handleUpdateFormSubmit} />
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