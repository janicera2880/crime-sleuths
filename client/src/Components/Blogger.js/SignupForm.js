import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [addSignup, setAddSignup] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    image_url: "",
    bio: "",
    location: "",
  });

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addSignup),
    })
      .then((r) => {
        setIsLoading(false);
        if (r.ok) {
          setAddSignup(false);
          r.json().then((user) => {
            setUser(user);
            setErrors([]);
            navigate("/");
          });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    setAddSignup((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return (
    <div className="signup-form">
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
          value={addSignup.username}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password is between 8 - 20 characters..."
          autoComplete="off"
          value={addSignup.password}
          onChange={handleInputChange}
        />

        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          autoComplete="off"
          value={addSignup.password_confirmation}
          onChange={handleInputChange}
        />

        <label htmlFor="image_url">Profile Image</label>
        <input
          type="text"
          name="image_url"
          placeholder="Image URL"
          autoComplete="off"
          value={addSignup.image_url}
          onChange={handleInputChange}
        />

        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          placeholder="Minimum 500 words..."
          autoComplete="off"
          value={addSignup.bio}
          onChange={handleInputChange}
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          placeholder="eg. Houston TX"
          autoComplete="off"
          value={addSignup.location}
          onChange={handleInputChange}
        />

        <button className="primary" type="submit">
          {isLoading ? "Loading..." : "Sign Up"}
        </button>

        {errors.map((err, index) => (
          <li style={{ color: "black" }} key={index}>
            {err}
          </li>
        ))}
      </form>
    </div>
  );
}

export default SignupForm;
