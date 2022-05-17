import React from "react";
import SectionHeader from "../Global/SectionHeader";
import CodingPlatform from "./CodingPlatform";
import Stat from "./Stat";

export default function Coding() {
  return (
    <div>
      <SectionHeader heading="CODING PROFILE" />
      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            flexGrow: 1,
          }}
        >
          <CodingPlatform
            link="https://codeforces.com/profile/AyushChakraborty"
            platform="CODEFORCES"
            rank="SPECIALIST"
          />
          <CodingPlatform
            link="https://www.codechef.com/users/ayush2020"
            platform="CODECHEF"
            rank="4 STAR"
          />
        </div>
        <div
          style={{
            flexGrow: 1,
            marginTop: 15,
          }}
        >
          <h2
            style={{
              color: "#F2EB3E",
              marginBottom: 15,
            }}
          >
            PROBLEM SOLVED
          </h2>
          <Stat max={223} num={223} platform="LEETCODE" />
          <Stat max={223} num={180} platform="GEEKS_FOR_GEEKS" />
          <Stat max={223} num={152} platform="CODEFORCES" />
          <Stat max={223} num={53} platform="CODECHEF" />
        </div>
      </div>
    </div>
  );
}
