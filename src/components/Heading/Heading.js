import React from "react";
import Divider from "../Global/Divider";
import "./heading.css";
import SocialGroup from "./SocialGroup";
export default function Heading() {
  return (
    <header>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1>: AYUSH CHAKRABORTY &gt;</h1>
        </div>
        <h2 className="heading-sm">
          WEB DEVELOPER / APP DEVELOPER / COMPETITIVE CODER
        </h2>
        <Divider color="#F2EB3E" />
      </div>
      <h2 className="heading-lr">
        WEB DEVELOPER / APP DEVELOPER / COMPETITIVE CODER
      </h2>
      <div className="social">
        <SocialGroup />
      </div>
    </header>
  );
}
