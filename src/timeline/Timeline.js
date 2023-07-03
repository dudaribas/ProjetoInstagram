import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "../suggestions/Suggestions";
import Posts from "./posts/Posts";
import Timao from "../imgs/timao.jpeg";
import Dudas from "../imgs/dudas.jpeg";
import Virtus from "../imgs/virtus.jpeg";


function Timeline() {
    const [posts, setPosts] = useState([
      {
        user: "Corinthians",
        postImage: Timao,
        likes: 1910,
        timestamp: "  7d",
      },
      {
        user: "Duda",
        postImage: Dudas,
        likes: 666,
        timestamp: "  1w",
      },
      {
        user: "Virtus",
        postImage:Virtus,        
        likes: 70,
        timestamp: "  5h",
      },
    ]);
  
    return (
      <div className="timeline">
        <div className="timeline__left">
          <div className="timeline__posts">
            {posts.map((posts) => (
              <Posts 
                user={posts.user}
                postImage={posts.postImage}
                likes={posts.likes}
                timestamp={posts.timestamp}
              />
            ))}
          </div>
        </div>
        <div className="timeline__right">
          <Suggestions />
        </div>
      </div>
    );
  }
  
  export default Timeline;