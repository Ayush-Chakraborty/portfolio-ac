import React from "react";
import linkImg from "../../Assets/link.svg";
import githubImg from "../../Assets/github_black.svg";
import "./project.css";

const ProjectDescription = ({
  heading,
  desc,
  link,
  github,
  techstack,
  img,
}) => {
  return (
    <div>
      <div className="project-image-container">
        {/* <img src={img} alt="image" /> */}
      </div>
      <div className="project-desc">
        <div>
          <h2>{heading}</h2>
          <p>{desc[0]}</p>
          <p style={{ textDecoration: "underline" }}>{desc[1]}</p>
          <ol style={{ marginLeft: 15 }}>
            {desc.map((d, idx) => {
              if (idx <= 1) return null;
              return <li>{d}</li>;
            })}
          </ol>
          {/* <p>{desc}</p> */}
          <div className="project-btn-container">
            <a
              href={link}
              style={{
                backgroundColor: "#FF9900",
                color: "black",
              }}
              target="_blank"
              rel="noreferrer"
            >
              Go to Website
              <img
                src={linkImg}
                alt=""
                style={{ height: 22 }}
                className="btn-icon"
              />
            </a>
            <a
              href={github}
              style={{
                backgroundColor: "#333",
                color: "white",
                marginLeft: 15,
              }}
              target="_blank"
              rel="noreferrer"
            >
              View Source Code
              <img
                src={githubImg}
                alt=""
                style={{ height: 23 }}
                className="btn-icon"
              />
            </a>
          </div>
        </div>
        <div className="techStack">
          <h3
            style={{
              textDecoration: "underline",
            }}
          >
            Tech Stack Used:
          </h3>
          <ul style={{ paddingLeft: 20, fontWeight: 500 }}>
            {techstack.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
