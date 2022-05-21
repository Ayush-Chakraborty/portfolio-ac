import React from "react";
import Social from "../Global/Social";
import email from "../../Assets/email.svg";
import linkedin from "../../Assets/linkedin.svg";
import github from "../../Assets/github.svg";
export default function SocialGroup() {
  return (
    <>
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
    </>
  );
}
