import React from "react";
import SectionHeader from "../Global/SectionHeader";
import "./skills.css";
export default function Skills() {
  const languages = ["C++", "PYTHON", "HTML", "CSS", "JAVASCRIPT", "SQL"];
  const frameworks = [
    "REACT",
    "REACT-NATIVE",
    "ANDROID STUDIO",
    "FLUTTER",
    "AWS",
  ];
  return (
    <>
      <SectionHeader heading="SKILLS" />
      <div className="skill">
        <div>
          <SkillHeader title="LANGUAGES" />
          {languages.map((lan) => (
            <SkillItem skill={lan} />
          ))}
        </div>
        <dir>
          <SkillHeader title="FRAMEWORKS" />
          {frameworks.map((lan) => (
            <SkillItem skill={lan} />
          ))}
        </dir>
      </div>
    </>
  );
}

function SkillHeader({ title }) {
  return (
    <div
      style={{
        backgroundColor: "#FFF500",
        color: "black",
        padding: "5px 20px",
        marginBottom: 15,
        marginTop: 15,
        display: "inline-block",
        fontWeight: 500,
        fontSize: "1.1rem",
      }}
    >
      {title}
    </div>
  );
}

function SkillItem({ skill }) {
  return (
    <p
      style={{
        color: "#00FBFB",
      }}
    >
      &gt;&gt;&gt;&nbsp;{skill}
    </p>
  );
}
