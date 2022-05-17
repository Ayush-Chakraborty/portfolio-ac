import React from "react";
import SectionHeader from "../Global/SectionHeader";
import ProjectItem from "./ProjectItem";

export default function Project() {
  return (
    <div>
      <SectionHeader heading="Projects" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          rowGap: 20,
          marginTop: 15,
        }}
      >
        <ProjectItem name="E-BANKING APP" web={true} />
        <ProjectItem name="CHAT APP" web={false} />
        <ProjectItem name="MEDIYOGA APP" web={false} />
        <ProjectItem name="NITW SITE" web={true} />
        <ProjectItem name="TO-DO APP" web={false} />
        <ProjectItem name="PORTFOLIO SITE" web={true} />
      </div>
    </div>
  );
}
