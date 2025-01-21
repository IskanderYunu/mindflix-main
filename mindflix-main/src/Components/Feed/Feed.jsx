import React, { useState } from "react";
import { useEffect } from "react";
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
import { API_KEY } from "../../data.js";

export const Feed = ({ category }) => {
  // creates state variable to store the data coming from the API
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryID=${category}&key=${API_KEY}`;
    // await fetch the API + response.json + another promise + items are stored in data
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  // category updated as you go through differect catgory
  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryID}/${item.id}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>Best Channel EVER!</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
          </Link>
        );
      })}
      {/* LINKS TO VIDEO PAGE */}
    </div>
  );
};
