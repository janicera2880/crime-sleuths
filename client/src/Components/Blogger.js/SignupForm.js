import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setAddSignup }) => {
  
  const previousValues = {
    username: "",
    password: "",
    password_confirmation: "",
    image_url: "",
    bio: "",
    location: "",
  };

  const [values, setValues] = useState(previousValues);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleInputSave = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    // console.log(values);
  };
  
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    // Update the API endpoint with the new field input
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        setAddSignup(false);
        r.json().then((user) => {
          setUser(user);
          navigate("/");
        });
      } else {
       
        r.json().then((err) => setErrors(err.errors));
      }
    });

    setValues(previousValues);
  }

  return (
    <div className="signup-form">
    
     
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        
          <label htmlFor="username">Username</label>
          {/* Update the value and onChange props of the Input fields */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            value={values.username}
            onChange={handleInputSave}
          />
        
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password is between 8 - 20 characters..."
            autoComplete="off"
            value={values.password}
            onChange={handleInputSave}
          />
       
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            autoComplete="off"
            value={values.password_confirmation}
            onChange={handleInputSave}
          />
       
          <label htmlFor="imageUrl">Profile Image</label>
          <input
            type="text"
            name="image_url"
            placeholder="Image Url"
            autoComplete="off"
            value={values.image_url}
            onChange={handleInputSave}
          />
       
          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            placeholder="Minimum 500 words..."
            autoComplete="off"
            value={values.bio}
            onChange={handleInputSave}
          />
       
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          placeholder="eg. Houston TX"
          autoComplete="off"
          value={values.location}
          onChange={handleInputSave}
        />    
      
        <button class="primary" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      
        {errors.map((err) => (
          <li style={{ color: "black" }} key={err}>
          {err}
        </li>
        ))}
     
    </form>
    </div>
  );
}

export default SignupForm;