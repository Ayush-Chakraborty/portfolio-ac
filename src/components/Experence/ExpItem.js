import React from "react";

export default function ExpItem() {
  const responsibility = [
    "Built android app v1 using React-Native",
    "Built android app v2 using Java & Android-Studio",
    "Designed backend Architechture using AWS",
    "Designed Database using MySQL",
    "Integrated BLE based hardware with Android App",
    "Added features in React based Web-Dashboard",
  ];
  return (
    <div
      style={{
        backgroundColor: "rgba(0,148,255,0.15)",
        display: "flex",
        padding: "15px 25px",
        position: "relative",
        marginTop: 15,
      }}
    >
      <div style={{ color: "white" }}>
        {responsibility.map((res) => (
          <p>&gt;&gt;&nbsp;{res}</p>
        ))}
      </div>
      <div
        style={{
          color: "#0066FF",
          marginLeft: 15,
          textAlign: "right",
          marginLeft: "auto",
          paddingLeft: 10,
        }}
      >
        <h1>DELTAFOUR</h1>
        <p>SOFTWARE DEVELOPER</p>
        <p>OCT ‘21 - MAY ‘22</p>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 70,
          width: 70,
          borderLeft: "5px solid #0094FF",
          borderTop: "5px solid #0094FF",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          height: 70,
          width: 70,
          borderRight: "5px solid #0094FF",
          borderBottom: "5px solid #0094FF",
        }}
      ></div>
    </div>
  );
}
