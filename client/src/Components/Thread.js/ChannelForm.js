import { useState } from "react";
import { Error, FormField, Input, Label, Textarea } from "../../styles";

const ChannelForm = ({ onAddChannel }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const channel = {
      name: name, 
      description: description,
    };

    fetch("/channels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(channel),
    }).then((r) => {
      if (r.ok) {
        setErrors([]);
        r.json().then((newChannel) => onAddChannel(newChannel));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

    // clear the input fields after submission
    setName("");
    setDescription("");
  }

  return (
    <div>
      <div className="text">Create New Channel!</div>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Channel Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="name"
            autoComplete="off"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormField>

        <FormField>
          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            placeholder="Minimum 200 words..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </FormField>

        <FormField>
          {/* Render error messages */}
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChannelForm;
