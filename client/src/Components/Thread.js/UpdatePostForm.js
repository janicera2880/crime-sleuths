import { useState } from "react";


function UpdatePostForm ({post, updatePost}){

    const [error, setError] = useState([]);
    // initialize state variables
  const [formData, setFormData] = useState({
    "title": post.title,
    "image": post.image,
    "content": "",
  })

  function handleInputChange(e){
    const key = e.target.name;
    const value = e.target.value;
    const newFormData = {...formData};
    newFormData[key] = value;
    setFormData(newFormData);
}

function handleSubmit(event) {
    event.preventDefault();
     // perform validation on form data here
     if (formData.title.trim() === "" || formData.content.trim() === "") {
         setError("Title and content are required.");
        return;
      }
    const updatedPost = {
      title: formData.title,
      image: formData.image,
      content: formData.content,
    };
    updatePost(updatedPost);
    setFormData({ ...post, ...updatedPost });
  }
  

return (
    <div>
      {/* Render error message if there is one */}
      {error && <p style={{color: "red"}}>{error}</p>}
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
       
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleInputChange}
          />
      
          <label htmlFor="image">Cover Photo</label>
          <input
            type="text"
            id="image"
            value={formData.image}
            onChange={handleInputChange}
          />
       
          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            id="content"
            value={formData.content}
            onChange={handleInputChange}
          />
       
          <button class="primary" type="submit">Submit</button>
       
      </form>
    </div>
  );
}

export default UpdatePostForm;