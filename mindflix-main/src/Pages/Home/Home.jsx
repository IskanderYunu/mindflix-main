import React from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Feed } from "../../Components/Feed/Feed";
import { useState } from "react";

const Home = ({ sidebar }) => {
  //setting category to display main feed
  const [category, setCategory] = useState(0);
  return (
    <>
      {/* Pass sidebar and category to Sidebar component */}
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        {/* Pass category to Feed component */}
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
