import React from "react";
// import Divider from "../Global/Divider";
import SectionHeader from "../Global/SectionHeader";

export default function Achievement() {
  return (
    // <div style={{ display: "flex" }}>
    <div>
      <SectionHeader heading="ACHIEVEMENTS" />
      <AchievementElement text="Ranked 313 IN Google kickstart" year="2021" />
      <AchievementElement
        text="Twice Institute Merit Scholarship holder"
        year="2019-’20 & 2020-’21"
      />
      <AchievementElement text="Awardee of JBNSTS Talent Search" year="2017" />
    </div>
    //   {/* <Divider color="#F2EB3E" vertical={true} /> */}
    // </div>
  );
}

function AchievementElement({ text, year }) {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgba(0,251,251,0.23)",
          padding: "10px 15px",
          color: "white",
          fontWeight: 600,
          marginTop: 15,
        }}
      >
        {text}
      </div>
      <div
        style={{
          textAlign: "right",
          color: "#FF9900",
          fontWeight: 600,
        }}
      >
        {year}
      </div>
    </div>
  );
}
