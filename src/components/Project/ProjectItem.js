import React from "react";
import webProject from "../../Assets/webProject.svg";
import appProject from "../../Assets/appProject.svg";
const ProjectItem = ({ name, web }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={web ? webProject : appProject}
        alt="file icon"
        style={{
          height: 70,
          width: 70,
        }}
      />
      <p
        style={{
          color: "white",
          marginTop: 10,
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default ProjectItem;
