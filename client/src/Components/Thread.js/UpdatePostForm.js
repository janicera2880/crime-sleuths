import { useState } from "react";


function UpdatePostForm ({post, updatePost}){

    const [errors, setErrors] = useState([]);
    // initialize state variables
  const [formData, setFormData] = useState({
    "title": post.title,
    "content": post.content,
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
     if (formData.title === "" || formData.content === "") {
      setErrors([]);
        return;
      }
    const updatedPost = {
      title: formData.title,
      content: formData.content,
    };
    updatePost(updatedPost);
    setFormData({ ...post, ...updatedPost });
  }
  

return (
    <div classsName="edit-form">
      
      <h4>Edit Post Here</h4>
      <form onSubmit={handleSubmit}>
       
          <h5>Title :</h5>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            style={{ width: "80%", padding: "8px", marginBottom: "20px"}}
          />
          <br />
          <br />
          <h5>Content :</h5>
          <textarea
            type="text"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <button class="primary" type="submit">Submit</button>
       {/* Render error message if there is one */}
      {errors && <p style={{color: "black"}}>{errors}</p>}
      </form>
    </div>
  );
}

export default UpdatePostForm;