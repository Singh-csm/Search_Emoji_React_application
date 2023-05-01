import React, { useState, useEffect } from "react";
import { searchEmoji } from "./emoji";
import "./emoji.css";

function EmojiSearch() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = searchEmoji.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
    
  }, [search]);
  
  return (
    <div>
      <div>
        <div className="heading">
        <center>
          <h1> Search the one which 👀 excites you the most  </h1>
          <input
            style={{ width: "20%", height: "30px" }}
            placeholder="Search your favorite Emoji"
            size="30"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </center>
        </div>
        <div className="container">
          {data.map((emoji) => (
            <div className="cardofemoji" key={emoji.title}>
              {emoji.symbol} {emoji.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmojiSearch;
