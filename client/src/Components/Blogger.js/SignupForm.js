import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  
  //Define separate state variables for each form field
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    // Update the API endpoint with the new field names
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
          password_confirmation: passwordConfirmation,
          image_url: imageUrl,
          bio,
          location
        }
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          resetForm();
          navigate("/");
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function resetForm() {
    setUsername("");
    setPassword("");
    setPasswordConfirmation("");
    setImageUrl("");
    setBio("");
    setLocation("");
  }

  return (
    <div className="signup-form">
      {/* Add a heading for the form */}
     
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        
          <label htmlFor="username">Username</label>
          {/* Update the value and onChange props of the Input fields */}
          <input
            type="text"
            id="username"
            placeholder="Username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password is between 8 - 20 characters..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
       
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            placeholder="Confirm Password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
       
          <label htmlFor="imageUrl">Profile Image</label>
          <input
            type="text"
            id="imageUrl"
            placeholder="Image Url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
       
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            placeholder="Minimum 500 words..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
       
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          placeholder="eg. Houston TX"
          autoComplete="off"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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