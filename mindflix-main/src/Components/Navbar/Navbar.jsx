import React from "react";
import "./Navbar.css";
import { Link } from "react-router";
import { useLocation } from "react-router";
import menu_icon from "../../Assets/menu.png";
import logo_mind from "../../Assets/logo_mind.png";
import search_icon from "../../Assets/search.png";

//ADD LOGIN |SIGNUP | My Dashboard BUTTONS delete old icons on the right

const Navbar = ({ setSidebar }) => {
  // for search bar HOOK
  const location = useLocation();
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
        />
        <Link to="/">
          <img className="logo" src={logo_mind} alt="" />
        </Link>
        <Link to="/">
          <h1>MindFlix</h1>
        </Link>
      </div>
      {location.pathname !== "/signup" &&
        location.pathname !== "/login" &&
        location.pathname !== "/dashboard" && (
          <div className="nav-middle flex-middle">
            <div className="search-box flex-div">
              <input type="text" placeholder="Search" />
              <img src={search_icon} alt="" />
            </div>
          </div>
        )}

      {/* might not need all of these clean up later */}
      <div className="nav-right flex-div">
        <Link to="/signup">
          <button className="nav-button">SignUp</button>
        </Link>
        <Link to="/login">
          <button className="nav-button">Login</button>
        </Link>
        <Link to="/dashboard">
          <button className="nav-button">My Dashboard</button>
        </Link>

        {/* <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img className="user-icon" src={profile_icon} alt="" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
