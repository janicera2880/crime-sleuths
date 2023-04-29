import { useState } from "react";
import { Error, FormField, Input, Label, Textarea } from "../../styles";
//import { useNavigate } from "react-router-dom";


const ChannelForm = ({ onAddChannel }) => {
    //const navigate = useNavigate()
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
   

    function handleSubmit(event) {
        event.preventDefault();
        const channel = {
          name: setName,
          description: setDescription,
          
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
    
    
        setName(""),
        setDescription(""),
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
        <Label htmlFor="bio">Description</Label>
        <Textarea
        rows="20"
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        />
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
  
  export default ChannelForm;