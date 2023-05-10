import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";


function EditDashboard() {
    // Set the initial state for updating user info
    const [updateValues, setUpdateValues] = useState({
      username: "",
      bio: "",
      location: "",
      id: "",
    });
  
    // Get and set the user data using the useContext
    const { user, setUser } = useContext(UserContext);
  
    // Use useState hook to show a success message when the user info is updated
    const [userUpdated, setUserUpdated] = useState(false);
  
    // Handle input changes in the form
    function handleInput(e) {
      const key = e.target.name;
      const value = e.target.value;
      const newData = { ...updateValues };
      newData[key] = value;
      setUpdateValues(newData);
    }
  
    // Handle form submission to update user info
    function handleSubmitClick(e) {
      e.preventDefault();
      const userData = { ...updateValues };
      userData.id = user.id;
      if (userData.bio === "") {
        userData.bio = user.bio;
      }
      if (userData.username === "") {
        userData.username = user.username;
      }
      if (userData.location === "") {
        userData.location = user.location;
      }
      // Send a PATCH request to update user info
      changeUpdate(userData);
      // Clear the form and set the success message to true
      clearForm();
    }
  
    function changeUpdate(data) {
      fetch(`/users/${data.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: data }),
      })
        .then((r) => r.json())
        .then((data) => {
          // Update user data with the new data
          setUser(data);
        })
        .catch((error) => {
          // Handle the error, e.g., display an error message to the user
          console.error("Error updating user info:", error);
        });
    }
  
    // Clear the form and set the success message to true
    function clearForm() {
      const userInfo = {
        username: "",
        bio: "",
        location: "",
        id: user.id,
      };
      setUserUpdated(true);
      setUpdateValues(userInfo);
    }
  
    // Show a success message when the user info is updated
    function SuccessMessage() {
      return <p>User Info Updated!</p>;
    }
  
    // Reset the userUpdated state when navigating back to the dashboard
    function unsuccessfulMessage() {
      if (userUpdated) {
        setUserUpdated(false);
      }
    }
  
   
    // render the form and the success message
    return(
        <div>
            <br />
            <br />
            <br /> 
            <br />
            <br />
            <div className="dashboard-form">
                <form onSubmit={handleSubmitClick}>
                <label htmlFor="Username">Username:</label>
                    <br />
                    <input type={"text"} name={"username"} placeholder={user?.username || ""} value={updateValues.username || ""} onChange={handleInput} />
                    <br />
                    <label htmlFor="bio">Bio:</label>
                    <br />
                    <input type={"text"} name={"bio"} placeholder={user?.bio || ""} value={updateValues.bio || ""} onChange={handleInput} />
                    <br />
                    <label htmlFor="location">Location:</label>
                    <br />
                    <input type={"text"} name={"location"} placeholder={user?.location || ""} value={updateValues.location || ""} onChange={handleInput} />
                    <br />
                    <button type="Submit"> Submit </button>
                    <br />
                    <br />
                    <Link to={"/user"}><button onClick={unsuccessfulMessage}> Back To Dashboard </button></Link>
                </form>
                    <br />
                    <br />
                    {userUpdated? <SuccessMessage /> : ""}
            </div>
        </div>
    )
}

export default EditDashboard;