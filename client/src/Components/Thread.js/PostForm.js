import React, { useState } from "react";
import { useParams } from "react-router-dom";

// The `onAddPost` function is passed down as a prop from the parent component
const PostForm = ({ onAddPost }) => {

  // Initialize the form fields as empty strings and an empty array for errors
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState([]);
    // Get the `id` parameter from the URL to determine the channelId
    const { id } = useParams();
    

    const channelId = parseInt(id);


  function handleSubmit(event) {
    event.preventDefault();
   
    const post = {
      // Pass in the values of the form fields
      title: title,
      image: image,
      content: content,
    };

    fetch(`/channels/${channelId}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((r) => {
      if (r.ok) {
        setErrors([]);
        // r.json().then((data) => console.log(data));
        r.json().then((newPost) => onAddPost(newPost));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
 // Clear the form fields after submission
    setTitle("");
    setImage("");
    setContent("");
  }

  return (
    <div>
      <br />
      <div className="text">Create New Post!</div>  
      <form onSubmit={handleSubmit}>
      
        <label htmlFor="title">Title</label>
        <input
        type="text"
        id="title"
        placeholder="Title"
        autoComplete="off"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />
        
        <label htmlFor="image">Cover Photo</label>
        <input
        type="text"
        id="image"
        placeholder="Image Url"
        autoComplete="off"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        />
       
        
        <label htmlFor="content">Content</label>
        <textarea
        type="text"
        id="content"
        placeholder="Content must be a minimum of 500 words..."
        autoComplete="off"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        />
       
        <button class="primary" type="submit">Submit</button>
        
        {errors.map((err) => (
          /* Display any errors returned by the server */
          <li style={{ color: "yellow" }} key={err}>
          {err}
        </li>
        ))}
        
        </form>
      </div>
    );
  }

export default PostForm;