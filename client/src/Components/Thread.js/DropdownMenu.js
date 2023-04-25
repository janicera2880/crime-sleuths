import React from "react";

function DropdownMenu( { name, handleDropdown } ){

    function handleChange(e){
        handleDropdown(e);
    }

    return(
        <div>
            <select name="name" value={name} onChange={handleChange}>
                <option value={""}>Channel</option>
                <option value={"Unlikely Suspects"}>Unlikely Suspects</option>
                <option value={"Deadly Betrayal"}>Deadly Betrayal</option>
                <option value={"Cold Cases: Solved and Unsolved"}>Cold Cases: Solved and Unsolved</option>
                <option value={"Death In The Dorm"}>Death In The Dorm</option>
                <option value={"Signs Of A Psychopath"}>Signs Of A Psychopath</option>
                <option value={"A Crime To Remember"}>A Crime To Remember</option>
            </select>
        </div>
    )
}

export default DropdownMenu;