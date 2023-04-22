import { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";


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
    <div>
   
      <h1>Please Login To Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={saveInput}
          ></input>
        </label>
        <br></br>
        <label>
          Password
          <input
            type="password"
            name="password"
            autoComplete="on"
            placeholder="Password"
            value={values.password}
            onChange={saveInput}
          ></input>
        </label>
        <button type="submit" value={isLoading ? "Loading..." : "Log In"} />
      
      <br></br>
        {errors.map((error) => (
          <li className="error" key={error}>Error: {error}</li>
          </form>
        ))}
   

    </div>
  );
};

export default LoginForm;