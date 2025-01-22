import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const [url, setUrl] = useState("");

  const handleAddVideo = () => {
    const videoId = url.split("v=")[1];
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    const videoThumbnail = `https://img.youtube.com/vi/${videoId}/0.jpg`;
    const videoTitle = `https://www.youtube.com/watch?v=${videoId}`;

    setVideos([
      ...videos,
      {
        id: videoId,
        url: videoUrl,
        thumbnail: videoThumbnail,
        title: videoTitle,
      },
    ]);
    setUrl("");
  };

  const handleDeleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  return (
    <div className="dashboard-container">
      <div className="add-video-form">
        <input
          type="text"
          placeholder="Enter YouTube video URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleAddVideo}>Add Video</button>
      </div>
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <iframe
              width="80%"
              height="500"
              src={video.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <a href={video.title} target="_blank" rel="noopener noreferrer">
              <h3>{video.title}</h3>
            </a>
            <button onClick={() => handleDeleteVideo(video.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
