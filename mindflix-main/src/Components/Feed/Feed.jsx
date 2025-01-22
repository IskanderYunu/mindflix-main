import React, { useState } from "react";
import { useEffect } from "react";
import "./Feed.css";

// LINKS THE VIDEOS TO THE VIDEO PAGE
import { Link } from "react-router";
import { API_KEY } from "../../data.js";
import { value_converter } from "../../data.js";
import moment from "moment";

export const Feed = ({ category }) => {
  // creates state variable to store the data coming from the API
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryID=${category}&key=${API_KEY}`;
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
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_converter(item.statistics.viewCount)} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
      {/* LINKS TO VIDEO PAGE */}
    </div>
  );
};
