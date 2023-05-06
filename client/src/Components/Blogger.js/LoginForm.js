// Import the necessary dependencies
import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
//import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";

// Create LoginForm functional component
const LoginForm = () => {

  // Initialize the previous state
  const prevStates = {
    username: "",
    password: "",
  };

  // Create state hooks for values, errors, and isLoading
  const [values, setValues] = useState(prevStates);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Get the user and setUser from the context
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Create a function to save the input value
  const saveInput = (e) => {
    const { name, value } = e.target;

    // Set the new value in the state
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Create a function to handle form submit
  function handleSubmit(e) {
    e.preventDefault();
   
    setIsLoading(true);

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        setErrors([]);
        r.json().then((user) => {
          setUser(user);
          navigate("/channels")
        });
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    });

    // Reset the input values
    setValues(prevStates);
  }

  // Render the LoginForm component
  return (
    <div className="login-form">
      
        <div>
          <form onSubmit={handleSubmit}>
            
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={saveInput}
              />
           
            <br />
            
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                autoComplete="on"
                placeholder="Password"
                value={values.password}
                onChange={saveInput}
              />
              <button class="primary" type="submit">
                {isLoading ? "Loading..." : "Login"}
              </button>
            
              {errors.map((err) => (
              <li style={{ color: "yellow" }} key={err}>
              {err}
            </li>
              ))}
            
          </form>
        </div>
    </div>
  );
};

// Export the LoginForm component
export default LoginForm;
