// Import the necessary dependencies
import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import Dashboard from "./Dashboard";
import { Button, Error, Input, FormField, Label } from "../../styles";

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
  const { user, setUser } = useContext(UserContext);

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
    <div>
      {user ?
        <Dashboard /> :
        <div>
          <form onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={saveInput}
              />
            </FormField>
            <br />
            <FormField>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                autoComplete="on"
                placeholder="Password"
                value={values.password}
                onChange={saveInput}
              />
            </FormField>
            <FormField>
              <Button variant="fill" color="primary" type="submit">
                {isLoading ? "Loading..." : "Login"}
              </Button>
            </FormField>
            <FormField>
              {errors.map((err) => (
                <Error key={err}>{err}</Error>
              ))}
            </FormField>
          </form>
        </div>}
    </div>
  );
};

// Export the LoginForm component
export default LoginForm;
