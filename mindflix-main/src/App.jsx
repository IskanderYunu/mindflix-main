import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Video from "./Pages/Video/Video";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video/:categoryID/:videoID" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
