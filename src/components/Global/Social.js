import React from "react";
import "./social.css";
export default function Social({ img, alt, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="social-item">
        <img src={img} alt={alt} />
      </div>
    </a>
  );
}
