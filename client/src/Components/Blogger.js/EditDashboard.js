import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function EditDashboard(){

    const [ updateValues, setUpdateValues ] = useState({
        "username": "",
        "image_url": "",
        "bio": "",
        "location": "",
        "id":""
    })

    const { user, setUser } = useContext(UserContext)

    const [userUpdated, setUserUpdated] = useState(false);

    function handleInput(e){
        const key = e.target.name;
        const value = e.target.value;
        const newData = {...updateValues}
        newData[key] = value;
        setUpdateValues(newData);
    }

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

        changeUpdate(userData);
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
            setUser(data);
        })
    }

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

    function SuccessMessage(){
        return(
            <p>
                "User Info Updated!"
            </p>
        )
    }

    function unsuccessfulMessage(){
        if(userUpdated){
            setUserUpdated(false);
        }
    }


    return(
        <div>
            Update Info
            <div>
                <form onSubmit={handleSubmitClick}>
                    Username
                    <br />
                    <input type={"text"} name={"username"} value={updateValues.username} onChange={handleInput} />
                    <br />
                    <br />
                    Profile Image
                    <br />
                    <input type={"text"} name={"image_url"} value={updateValues.image_url} onChange={handleInput} />
                    <br />
                    <br />
                    Bio
                    <br />
                    <input type={"text"} name={"bio"} value={updateValues.bio} onChange={handleInput} />
                    <br />
                    Location
                    <br />
                    <input type={"text"} name={"location"} value={updateValues.location} onChange={handleInput} />
                    <br />
                    <br />
                    <button type="Submit"> Submit </button> or <Link to={"/profile"}><button onClick={unsuccessfulMessage}> Back </button></Link>
                </form>
                <br />
                <br />
                <br />
                {userUpdated? <SuccessMessage /> : ""}
            </div>
        </div>
    )
}

export default EditDashboard;