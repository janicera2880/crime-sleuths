import { useState } from "react";

const ChannelForm = ({ onAddChannel }) => {
  const previousValues = {
    name: "",
    description: "",
  };
  const [values, setValues] = useState(previousValues);
  const [errors, setErrors] = useState([]);

  const handleInputSave = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
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

        <button className="primary" type="submit">
          Submit
        </button>

        <ul>
          {errors.map((err, index) => (
            <li style={{ color: "black" }} key={index}>
              {err}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default ChannelForm;
