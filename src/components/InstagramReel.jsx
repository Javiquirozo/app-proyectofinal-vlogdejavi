import React from "react";
import InstagramReel from "./InstagramReel";

const App = () => {
  const reelLink = "https://www.instagram.com/p/CspTgOEuyG5/";
  
  return (
    <div>
      <h1>My Website</h1>
      <InstagramReel reelLink={reelLink} />
    </div>
  );
};

export default App;
