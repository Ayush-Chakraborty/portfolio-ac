import React from "react";
import Education from "./Education/Education";
import Heading from "./Heading/Heading";
import "./main.css";
import Skills from "./Skills/Skills";
import profile from "../Assets/profile.png";
import Achievement from "./Achievement/Achievement";
import Experience from "./Experence/Experience";
import Coding from "./Coding/Coding";
import Project from "./Project/Project";
export default function Main() {
  return (
    <>
      <Heading />
      <div className="container">
        <Education />
        <section className="profile">
          <img src={profile} alt="Profile" />
        </section>
        <Achievement />
        <Experience />
        <Skills />
        <section className="coding">
          <Coding />
        </section>
        <Project />
      </div>
      {/* <section className="left"></section> */}
    </>
  );
}
