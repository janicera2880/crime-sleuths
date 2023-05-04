import React, { useContext } from "react";
import headerImg from "../Images/headerAnimate.gif"
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function WelcomePage({ username }) {
  return (
    <div>   
      <img id="logoImg" src={headerImg} alt="crimesleuthsImg" />
      <h4>
        Hello, {username}!
      </h4>
      <p>
        Welcome to Crime-Sleuths, a community for people passionate about uncovering the truth about crimes and justice. To ensure that we maintain a safe and respectful environment, we have a few guidelines that we ask all members to follow:

        Respectful Communication: Please be respectful to other members of the community. Do not use hate speech or make derogatory comments towards anyone, regardless of their background, beliefs, or opinions.

        No Promotion of Violence: We do not condone the promotion of violence in any form. Please do not post any content that advocates for violent behavior or promotes harm towards any individual or group.

        Accuracy and Truthfulness: Our community is dedicated to uncovering the truth about crimes and justice. Please refrain from making false accusations or spreading misleading information. If you are unsure about the accuracy of a claim, please fact-check before sharing it.

        Collaboration: We encourage collaboration and discussion within the community, but please keep the conversation civil and constructive. We welcome diverse perspectives and opinions, but personal attacks or abusive behavior will not be tolerated.

        By following these guidelines, we can ensure a positive and productive community for everyone. Thank you for being a part of Crime-Sleuths!
      </p>
    </div>
  )
}

function LoginMessage() {
  return (
    <h4>    
      <img id="logoImg" src={headerImg} alt="crimesleuthsImg"/>
      <br />
      <Link to={"/login"}>Join our community by signing in to view more stories.</Link>
    </h4>
  )
}

function message(user) {
  return user ? <WelcomePage username={user.username} /> : <LoginMessage />;
}

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {message(user)}
    </div>
  )
}

export default Home;