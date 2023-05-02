import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { PostsContext } from "../../Context/PostsContext";
import UpdatePostForm from "./UpdatePostForm";

    function PostLists () {
    // Get the user and userPosts contect
    const {user} = useContext(UserContext);
    const { userPosts, setUserPosts } = useContext(PostsContext);


    // Function to delete post
    function deletePost(post){
    fetch(`/users/${user.id}/post/${post.id}`,{
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(post)
    }).then( r=>r.json).then( ()=>{

        // Filter out the deleted post from the userPosts array
        const newPostArray = userPosts.filter(findPost => {
            return findPost.id !== post.id
        })
        // Update the userPosts context with the new array
        setUserPosts(newPostArray);
    });
}

    // Function to update a post
    function updatePost(updatedPost, postID ){
        fetch(`/users/${user.id}/reviews/${postID}`,{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPost)
          }).then(r=>r.json()).then(data=>{

            // Create a new array with the updated post
            const newPostArray = [...userPosts];
            newPostArray.map(post => {
                if (post.id === data.id) {
                    post.title = data.title;
                    post.image = data.image;
                    post.content = data.content;
                }
            });

            // Update the userPosts context with the new array
            setUserPosts(newPostArray);
          });
    }

    // Function to render the post components
    const postComponent = () => {
        if (userPosts === null || userPosts.length < 1) {
            return <span>No Post Found!</span>;
        }
        return userPosts.map( post => {

            // Function to handle the delete button click
            function handleDeleteClick(){
                deletePost(post);
            }

            // Function to handle the update form submission
            function handleUpdate(newPost){
                updatePost(newPost, post.id);
            } 
        // Render the post with the update form and delete button
            return (
                <div key={post.id}>
                    {post.channel.name}
                    <br />
                    {post.title}
                    <br />
                    {post.image}
                    <br />
                    {post.content}
                    <br />
                    Edit Post
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
        <div>
            <h2>{user.username}'s Posts</h2>
            <br />
            <Link to={"/user"}>Dashboard</Link>
            {postComponent()}
        </div>
    );
}



export default PostLists;