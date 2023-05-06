import { useState } from "react";

const ChannelForm = ({ onAddChannel }) => {
  const previousValues = {
    name: "",
    description: "",
    
  };
  const [values, setValues] = useState(previousValues);
  const [errors, setErrors] = useState([]); // Initialize errors state as an empty array
  
  const handleInputSave = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    // console.log(values);
  };

  function handleSubmit(event) {
    event.preventDefault();
    

    fetch("/channels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((r) => {
      if (r.ok) {
        setErrors([]);
        r.json().then((newChannel) => onAddChannel(newChannel));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

    // clear the input fields after submission
    setValues(previousValues);
  }

  return (
    <div className="channel-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Channel Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Choose a unique name for your channel..."
          autoComplete="off"
          value={values.name}
          onChange={handleInputSave}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          placeholder="Minimum 200 characters..."
          value={values.description}
          onChange={handleInputSave}
        />
        {/* Submit button */}
        <button className="primary" type="submit">Submit</button>
        {/* Render error messages */}
        {errors.map((err) => (
          <li style={{ color: "black" }} key={err}>
          {err}
        </li>
        ))}

       
      </form>
    </div>
  );
};

export default ChannelForm;
