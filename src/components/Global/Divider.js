import React from "react";

export default function Divider({ color, vertical }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        transform: vertical && "rotateZ(90deg)",
      }}
    >
      <div style={{ height: 3, width: "20%", backgroundColor: color }}></div>
      <div style={{ height: 1, width: "100%", backgroundColor: color }}></div>
      <div
        style={{
          height: 3,
          width: "40%",
          backgroundColor: color,
          marginLeft: "auto",
        }}
      ></div>
    </div>
  );
}
