import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";


function EditDashboard(){
    //set the initial state for updating user info
    const [ updateValues, setUpdateValues ] = useState({
        "username": "",
        "image_url": "",
        "bio": "",
        "location": "",
        "id":""
    })
    // get and set the user data using the useContext
    const { user, setUser } = useContext(UserContext)

    // use useState hook to show a success message when the user info is updated
    const [userUpdated, setUserUpdated] = useState(false);

    
    // handle input changes in the form
    function handleInput(e){
        const key = e.target.name;
        const value = e.target.value;
        const newData = {...updateValues}
        newData[key] = value;
        setUpdateValues(newData);
    }

    // handle form submission to update user info
    function handleSubmitClick(e){
        e.preventDefault();
        const userData = {...updateValues}
        userData.id = user.id;
        if(userData.bio === ""){
            userData.bio = user.bio;
        }
        if(userData.username === ""){
            userData.username = user.username;
        }
        if(userData.image_url === ""){
            userData.image_url = user.image_url;
        }
        if(userData.location === ""){
            userData.location = user.location;
        }
        // send a PATCH request to update user info
        changeUpdate(userData);
        // clear the form and set the success message to true
        clearForm();
    }

    function changeUpdate(data){
        fetch(`/users/${data.id}`,{
            method: "PATCH",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(r => r.json() ).then(data=>{
            // update user data with the new data
            setUser(data);
        })
    }
    // clear the form and set the success message to true
    function clearForm(){
        const userInfo = {
            "username": "",
            "image_url": "",
            "bio": "",
            "location": "",
            "id": user.id
        }
        setUserUpdated(true);
        setUpdateValues(userInfo);
    }

    // show a success message when the user info is updated
    function SuccessMessage(){
        return(
            <p>
                "User Info Updated!"
            </p>
        )
    }
    // reset the userUpdated state when navigating back to the dashboard
    function unsuccessfulMessage(){
        if(userUpdated){
            setUserUpdated(false);
        }
    }

    // render the form and the success message
    return(
        <div>
            Update Info
            <div>
                <form onSubmit={handleSubmitClick}>
                    Username
                    <br />
                    <input type={"text"} name={"username"} value={updateValues.username} onChange={handleInput} />
                    <br />
                    Profile Image
                    <br />
                    <input type={"text"} name={"image_url"} value={updateValues.image_url} onChange={handleInput} />
                    <br />
                    Bio
                    <br />
                    <input type={"text"} name={"bio"} value={updateValues.bio} onChange={handleInput} />
                    <br />
                    Location
                    <br />
                    <input type={"text"} name={"location"} value={updateValues.location} onChange={handleInput} />
                    <br />
                    <button type="Submit"> Submit </button> or <Link to={"/dashboard"}><button onClick={unsuccessfulMessage}> Back To Dashboard </button></Link>
                </form>
                    <br />
                    <br />
                    {userUpdated? <SuccessMessage /> : ""}
            </div>
        </div>
    )
}

export default EditDashboard;