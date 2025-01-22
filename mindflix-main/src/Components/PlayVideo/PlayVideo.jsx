//THIS SITS ON THE HOME PAGE AND PLAYS THE VIDEO IN THE BACKGROUND
import React from "react";
import "./PlayVideo.css";
import video2 from "../../assets/video2.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video2} controls autoPlay muted></video>
      <h3>Best Ever Video!</h3>
      <div className="play-video-info">
        <p>1523 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" /> 125
          </span>
          <span>
            <img src={dislike} alt="" /> 12
          </span>
          <span>
            <img src={share} alt="" /> Share
          </span>
          <span>
            <img src={save} alt="" /> Save
          </span>
        </div>
      </div>
      <hr />
      {/* <div className="publsiher">
        <img src={jack} alt="" />
        <div>
          <p>Channel Name</p>
          <span>1M Followers</span>
        </div>
        <button>Follow</button>
        <div className="vid-description">
          <p>Channel makes learning easy!</p>
          <p>Subscribe to watch more videos like this!</p>
          <hr />
        </div>
      </div> */}
    </div>
  );
};

export default PlayVideo;
