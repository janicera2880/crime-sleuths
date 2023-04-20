import { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const initialState = {
      username: "",
      password: "",
    };
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        
        const { name, value } = e.target;
    
        setValues({
          ...values,
          [name]: value,
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
              navigate("/channels");
            });
          } else {
            r.json().then((err) => setErrors(err.error));
          }
        });
    
        setValues(initialState);

      }
    
    
    return (
    
      <div>
      <h1>Log In Here!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
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
            onChange={handleChange}
          ></input>
        </label>
        <input type="submit" value={isLoading ? "Loading..." : "Log In"} />
      </form>
      {/* if there's an error, display it in orange */}
      {errors ? <h3 style={{ color: "orange" }}>{errors}</h3> : null}
    </div>
  );
};
  
  export default LoginForm;