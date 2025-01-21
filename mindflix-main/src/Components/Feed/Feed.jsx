import React from "react";
import "./Feed.css";
import thumbnail1 from "../../Assets/thumbnail1.png";
import thumbnail2 from "../../Assets/thumbnail2.png";
import thumbnail3 from "../../Assets/thumbnail3.png";
import thumbnail4 from "../../Assets/thumbnail4.png";
import thumbnail5 from "../../Assets/thumbnail5.png";
import thumbnail6 from "../../Assets/thumbnail6.png";
import thumbnail7 from "../../Assets/thumbnail7.png";
import thumbnail8 from "../../Assets/thumbnail8.png";
// LINKS THE VIDEOS TO THE VIDEO PAGE
import { Link } from "react-router";

export const Feed = () => {
  return (
    <div className="feed">
      {/* LINKS TO VIDEO PAGE */}
      <Link to={`video/20/4521`} className="card">
        <img src={thumbnail1} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </Link>
      <div className="card">
        <img src={thumbnail2} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail1} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail2} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="" />
        <h2>Best Channel EVER!</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
    </div>
  );
};
