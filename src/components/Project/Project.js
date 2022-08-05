import React from "react";
import SectionHeader from "../Global/SectionHeader";
import ProjectItem from "./ProjectItem";

export default function Project({ modalOpenHandler }) {
  const projectNames = [
    "FILE-TRANSFER APP",
    "MEDIYOGA APP",
    "HOSPITAL MANAGEMENT APP",
    "E-BANKING APP",
    "NITW SITE",
    "TO-DO APP",
  ];
  return (
    <>
      <SectionHeader heading="Projects" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          rowGap: 20,
          marginTop: 15,
        }}
      >
        {projectNames.map((project, idx) => (
          <ProjectItem
            name={project}
            openModal={() => {
              modalOpenHandler(idx);
            }}
            web={!(idx === 2 || idx === 5)}
          />
        ))}
      </div>
    </>
  );
}
