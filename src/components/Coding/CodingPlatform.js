import React, { useState } from "react";

export default function CodingPlatform({ rank, platform, link }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div style={{ minWidth: 150, maxWidth: 250, padding: 15 }}>
      <div>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#00FBFB",
            fontWeight: 500,
          }}
        >
          {rank}
        </p>
        <div
          style={{
            height: 2,
            width: "100%",
            backgroundColor: "#F2EB3E",
          }}
        ></div>
        <a href={link} target="_blank" rel="noreferrer">
          <div
            style={{
              color: "black",
              fontWeight: 600,
              padding: "10px 15px",
              backgroundColor: isHovering ? "#F2EB3E" : "#F3EE6D",
              display: "inline-block",
              float: "right",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          >
            {platform}
          </div>
        </a>
      </div>
    </div>
  );
}
