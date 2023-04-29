import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Error, FormField, Input, Label, Textarea } from "../../styles";

const PostForm = ({ onAddPost }) => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState([]);
    const { id } = useParams();
 

    const channelId = parseInt(id);


  function handleSubmit(event) {
    event.preventDefault();
   
    const post = {
      title: setTitle,
      image: setImage,
      content: setContent,
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

    setTitle(""),
    setImage(""),
    setContent("");
  }

  return (
    <div>
      <br></br>
      <div className="text">Create New Post!</div>  
      <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="title">Title</Label>
        <Input
        type="text"
        id="title"
        placeholder="Title"
        autoComplete="off"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />
        </FormField>
        <FormField>
        <Label htmlFor="image">Cover Photo</Label>
        <Input
        type="text"
        id="image"
        placeholder="Image Url"
        autoComplete="off"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        />
        </FormField>
        <FormField>
        <Label htmlFor="content">Content</Label>
        <Textarea
        type="text"
        id="content"
        placeholder="Content"
        autoComplete="off"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        />
        </FormField>
        <FormField>
        <Button type="submit">Submit</Button>
        </FormField>
        <FormField>
        {errors.map((err) => (
        <Error key={err}>{err}</Error>
        ))}
        </FormField>
        </form>
      </div>
    );
  }

export default PostForm;