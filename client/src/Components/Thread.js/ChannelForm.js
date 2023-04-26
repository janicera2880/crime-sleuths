import { useState } from "react";
import { Button, Error, FormField, Input, Label, Textarea } from "../../styles";
import { useNavigate } from "react-router-dom";


function ChannelForm({ }) {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false)


    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);
        setIsLoading(true)

        fetch("/channels", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            description: setDescription,
          }),
        }).then((response) => {
          setName("")
          setDescription("")
          setIsLoading(false);
          if (response.ok) {
            response.json().then(navigate("/channels"));
          } else {
            response.json().then((error) => setErrors(error.errors)); 
          }
        });        
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
        <Button type="submit">{isLoading ? "Loading..." : "Submit"}</Button>
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