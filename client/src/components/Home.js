import LoginForm from "./LoginForm";
import headerImg from "../headerAnimate.gif"

const Home = () => {
    return (
      <div>        
        <img id="logoImg" src={headerImg} alt="crimesleuthsImg"/>
        <br></br>
        <LoginForm />
      </div>
    );
  };
  
  export default Home;