import { useState } from "react";

function UpdatePostForm ({post, onClickUpdate, updatePost}){

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
    // if validation passes, call function to submit form data
    const updatedPost = {
      title: formData.title,
      image: formData.image,
      content: formData.content,
    };
    // call function to submit updated post data
    updatePost(updatedPost);
    resetForm();
  }
  function resetForm(){
    const clearData = {
        "title": post.title,
        "image": post.image,
        "content": ""
    }
    setFormData(clearData);
}

return (
    <div>
      {/* Add a heading for the form */}
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="title">Title</Label>
        <Input
        type="text"
        id="title"
        value={formData.title}
        onChange={handleInputChange}
        />
        </FormField>
        <FormField>
        <Label htmlFor="image">Cover Photo</Label>
        <Input
        type="text"
        id="image"
        value={formData.image}
        onChange={handleInputChange}
        />
        </FormField>
        <FormField>
        <Label htmlFor="content">Content</Label>
        <Textarea
        type="text"
        id="content"
        value={formData.content}
        onChange={handleInputChange}
        />
        </FormField>
        <FormField>
        <Button type="submit">Submit</Button>
        </FormField>
        </form>

    </div>
    );
}


export default UpdatePostForm;