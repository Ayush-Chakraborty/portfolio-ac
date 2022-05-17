import React from "react";
import Divider from "../Global/Divider";
import Social from "../Global/Social";
import "./heading.css";
import email from "../../Assets/email.svg";
import linkedin from "../../Assets/linkedin.svg";
import github from "../../Assets/github.svg";
export default function Heading() {
  return (
    <header>
      <div>
        <h1>: AYUSH CHAKRABORTY &gt;</h1>
        <Divider color="#F2EB3E" />
      </div>
      <h2>WEB DEVELOPER / APP DEVELOPER / COMPETITIVE CODER</h2>
      <div className="social">
        <Social
          img={email}
          alt="Email icon"
          link="mailto:ayush.cborty1@gmail.com"
        />
        <Social
          img={linkedin}
          alt="LinkedIn Icon"
          link="https://www.linkedin.com/in/ayush-chakraborty-49bb721a2/"
        />
        <Social
          img={github}
          alt="Github Icon"
          link="https://github.com/Ayush-Chakraborty"
        />
      </div>
    </header>
  );
}
