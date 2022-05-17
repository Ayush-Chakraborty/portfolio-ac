import React from "react";

export default function SectionHeader({ heading }) {
  return (
    <div
      style={{
        color: "#FF9900",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            backgroundColor: "#FF9900",
            height: 2,
            width: "calc(100% - 7px)",
          }}
        ></div>
        <Box />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ marginLeft: 15 }}>{heading}</h2>
        <div
          style={{
            width: 45,
            backgroundImage:
              "linear-gradient(to right,rgba(255,153,0,0.4),rgba(255,153,0,1))",
            height: 10,
            marginLeft: "auto",
            marginRight: 15,
          }}
        ></div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Box />
        <div
          style={{
            backgroundColor: "#FF9900",
            height: 1.5,
            width: "calc(50% - 14px)",
          }}
        ></div>
        <Box />
        <div
          style={{
            backgroundColor: "#FF9900",
            height: 1.5,
            width: "50%",
          }}
        ></div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div style={{ height: 7, width: 7, backgroundColor: "#FF9900" }}></div>
  );
}
