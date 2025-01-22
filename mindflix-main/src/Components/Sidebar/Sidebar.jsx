import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import explore from "../../assets/explore.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";

//!!!ADD THE RIGHT ICONS AND DIFFERENT CATEGORIES FOR EDUCTION || REMOVE UNESSARY CATEGORIES and ICONS
const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sortcut-link">
        {/* makes sure the category is set to appropriate cat numnber */}
        <div
          // !!!EDUCATION CAT IS 27
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div
          className={`side-link ${category === 27 ? "active" : ""}`}
          onClick={() => setCategory(27)}
        >
          <img src={game_icon} alt="" />
          <p>Education</p>
        </div>
        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div
          className={`side-link ${category === 26 ? "active" : ""}`}
          onClick={() => setCategory(26)}
        >
          <img src={explore} alt="" />
          <p>How-to & Style</p>
        </div>
        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <img src={tech} alt="" />
          <p>Science & Tech</p>
        </div>
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <img src={blogs} alt="" />
          <p>Entertainment</p>
        </div>
      </div>
      <hr />
      <div className="follower-list">
        <h3>Following</h3>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>John</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" />
          <p>Simon</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" />
          <p>Tom</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" />
          <p>Megan</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
