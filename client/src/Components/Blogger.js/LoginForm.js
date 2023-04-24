import { useState, useContext } from "react";
import { UserContext } from "./components/context/user";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Button, Error, Input, FormField, Label } from "../../styles";



const LoginForm = () => {
  const prevStates = {
    username: "",
    password: "",
  };
  const [values, setValues] = useState(prevStates);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  
  const saveInput = (e) => {
    const { key, value } = e.target;

    setValues({
      ...values,
      [key]: value,
    });
    // console.log(values);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("submitted");
   
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
          navigate("/books");
        });
      } else {
        // r.json().then((err) => console.log(err));
        r.json().then((err) => setErrors(err.error));
      }
    });

    setValues(prevStates);
  }


  return (
    
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
        <br></br>
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
  );
}

export default LoginForm;