import React from "react";
import "./Navbar.css";
import menu_icon from "../../Assets/menu.png";
import logo_mind from "../../Assets/logo_mind.png";
import search_icon from "../../Assets/search.png";
import upload_icon from "../../Assets/upload.png";
import more_icon from "../../Assets/more.png";
import notification_icon from "../../Assets/notification.png";
import profile_icon from "../../Assets/jack.png";

//ADD LOGIN |SIGNUP | My Dashboard BUTTONS delete old icons on the right

const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" src={menu_icon} alt="" />
        {/* PUT MINDFLIX logo with your own and NAME */}
        <img className="logo" src={logo_mind} alt="" />
        <h1>MindFlix</h1>
      </div>

      <div className="nav-middle flex-middle">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="" />
        </div>
      </div>
      {/* might not need all of these clean up later */}
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img className="user-icon" src={profile_icon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
