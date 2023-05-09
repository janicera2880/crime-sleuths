import React, { useState } from "react";
import { useParams } from "react-router-dom";

const PostForm = ({ onAddPost }) => {
const [formData, setFormData] = useState({
title: "",
image: "",
content: "",
});

const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);

const { id } = useParams();
const channelId = parseInt(id);

const handleChange = (event) => {
setFormData({
...formData,
[event.target.name]: event.target.value, 
});
};

const handleSubmit = (event) => {
event.preventDefault();
setIsLoading(true);

const newPost = {
  ...formData,
};

fetch(`/channels/${channelId}/posts`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newPost),
})
.then((response) => {
  if (response.ok) {
    setErrors([]);
    response.json().then((newPost) => onAddPost(newPost));
  } else {
    response.json().then((err) => {
      if (err.errors) {
        setErrors(err.errors);
      } else {
        setErrors([err.error]);
      }
    });
  }
})
.finally(() => {
  setIsLoading(false);
});
};
  return (
    <div className="post-form">
      <br />
      <div className="formtext">Start A Thread On This Channel!</div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          autoComplete="off"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="image">Cover Photo:</label>
        <input
          type="text"
          name="image"
          placeholder="Image Url"
          autoComplete="off"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="content">Content:</label>
        <textarea
          type="text"
          name="content"
          placeholder="Must be a minimum of 300 words..."
          autoComplete="off"
          value={formData.content}
          onChange={handleChange}
        />

        <button className="primary" type="submit">
        {isLoading ? "Submitting..." : "Submit"}
        </button>

        {errors.map((err) => (
          /* Display any errors returned by the server */
          <li style={{ color: "black" }} key={err}>
            {err}
          </li>
        ))}
        </form>
      </div>
  );
}
export default PostForm;
