import React from "react";

export default function Institute() {
  return (
    <div
      style={{
        padding: 15,
        paddingBottom: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            height: 1,
            // width: 20,
            backgroundColor: "#00FBFB",
            flexGrow: 1,
          }}
        ></div>
        <h3
          style={{
            color: "#00FBFB",
            fontWeight: 500,
            marginLeft: 3,
          }}
        >
          NIT WARANGAL
        </h3>
        <div style={{ flexGrow: 1 }}></div>
      </div>
      <div
        style={{
          height: 50,
          width: 1,
          backgroundColor: "#00FBFB",
          transform: "translateY(-12px)",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          transform: "translateY(-32px)",
        }}
      >
        <div
          style={{
            height: 1,
            backgroundColor: "#00FBFB",
            flexGrow: 1,
          }}
        ></div>
        <div
          style={{
            height: 7,
            width: 7,
            backgroundColor: "#00FBFB",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "rgba(0,251,251,0.5)",
            padding: "10px 15px",
            marginLeft: 10,
            color: "white",
            fontWeight: 600,
          }}
        >
          B.TECH / ECE
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#F2EB3E",
          fontWeight: 600,
        }}
      >
        <p>BATCH</p>
        <p>CGPA/ PERCENTAGE</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#00FBFB",
        }}
      >
        <p>2019-'23</p>
        <p>8.61</p>
      </div>
    </div>
  );
}
