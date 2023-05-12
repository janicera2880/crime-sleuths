import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function EditDashboard () {
  const { user, setUser } = useContext(UserContext);
  const [updateValues, setUpdateValues] = useState({
    username: "",
    bio: "",
    location: "",
    id: user?.id || "",
  });

  
  const [userUpdated, setUserUpdated] = useState(false);

  function handleInput(e) {
    const key = e.target.name;
    const value = e.target.value;
    const newData = { ...updateValues };
    newData[key] = value;
    setUpdateValues(newData);
  }

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
    changeUpdate(userData);
    clearForm();
  }

  function changeUpdate(userData) {
    fetch(`/users/${userData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userData }),
    })
      .then((r) => r.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error updating user info:", error);
      });
  }

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

  function SuccessMessage() {
    return <p>User Info Updated!</p>;
  }

  function resetUserUpdated() {
    if (userUpdated) {
      setUserUpdated(false);
    }
  }

  return (
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
          <input
            type="text"
            name="username"
            placeholder={user?.username || ""}
            value={updateValues.username || ""}
            onChange={handleInput}
          />
          <br />
          <label htmlFor="bio">Bio:</label>
          <br />
          <input
            type="text"
            name="bio"
            placeholder={user?.bio || ""}
            value={updateValues.bio || ""}
            onChange={handleInput}
          />
          <br />
          <label htmlFor="location">Location:</label>
          <br />
          <input
            type="text"
            name="location"
            placeholder={user?.location || ""}
            value={updateValues.location || ""}
            onChange={handleInput}
          />
          <br />
          <button type="submit">Submit</button>
          <br />
          <br />
          <Link to="/user">
            <button onClick={resetUserUpdated}>Back To Dashboard</button>
          </Link>
        </form>
        <br />
        <br />
        {userUpdated && <SuccessMessage />}
      </div>
    </div>
  );
}

export default EditDashboard;
