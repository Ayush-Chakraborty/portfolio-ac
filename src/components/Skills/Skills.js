import React from "react";
import SectionHeader from "../Global/SectionHeader";

export default function Skills() {
  const languages = ["C++", "PYTHON", "HTML", "CSS", "JAVASCRIPT", "SQL"];
  const frameworks = [
    "REACT",
    "REACT-NATIVE",
    "ANDROID STUDIO",
    "NODE JS",
    "AWS",
  ];
  return (
    <div>
      <SectionHeader heading="SKILLS" />
      <div style={{ padding: "0 15px" }}>
        <SkillHeader title="LANGUAGES" />
        {languages.map((lan) => (
          <SkillItem skill={lan} />
        ))}
        <SkillHeader title="FRAMEWORKS" />
        {frameworks.map((lan) => (
          <SkillItem skill={lan} />
        ))}
      </div>
    </div>
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
