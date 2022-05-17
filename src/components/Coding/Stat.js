import React from "react";

export default function Stat({ max, platform, num }) {
  const frac = num / max;
  return (
    <div
      style={{
        marginBottom: 10,
      }}
    >
      <div
        style={{
          width: `calc(100% * ${frac})`,
          backgroundColor: "#00FBFB",
          height: 8,
          borderRadius: 50,
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.1rem",
          marginTop: 7,
          fontWeight: 500,
        }}
      >
        <p style={{ color: "white" }}>{platform}</p>
        <p style={{ color: "#FF9900" }}>{num}</p>
      </div>
    </div>
  );
}
