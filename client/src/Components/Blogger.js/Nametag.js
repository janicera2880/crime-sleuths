import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Nametag() {
  // Get user from context
  const { user } = useContext(UserContext);

  // Define onClick event handler
  const handleClick = () => {
    console.log(`Clicked on button for user ${user.username}`);
  };

  return (
    // Render a button with user's username
    <span>
      <button class="primary" onClick={handleClick}>Hi, {user.username}</button>
    </span>
  );
}

export default Nametag;