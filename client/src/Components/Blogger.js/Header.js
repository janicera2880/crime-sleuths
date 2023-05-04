import React from "react";
import headerLogo from "../Images/headerlogo.gif"




function Header() {
    return (
      <div className="header">        
        <img id="headeLogo" src={headerLogo} alt="headerLogo"/>
      </div>
    );
  }
  
  export default Header;