import React, { useState } from "react";
import Education from "./Education/Education";
import Heading from "./Heading/Heading";
import "./main.css";
import Skills from "./Skills/Skills";
import profile from "../Assets/profile.jpeg";
import Achievement from "./Achievement/Achievement";
import Experience from "./Experence/Experience";
import Coding from "./Coding/Coding";
import Project from "./Project/Project";
import SocialGroup from "./Heading/SocialGroup";
import Modal from "./Project/Modal";
import { AnimatePresence } from "framer-motion";
import projectData from "./Project/Data";
export default function Main() {
  const [modalOpen, setModalOpen] = useState(false);
  const [project, setProject] = useState(projectData[0]);
  return (
    <>
      <Heading />
      <div className="container">
        <section className="education-container">
          <Education />
        </section>
        <section className="profile">
          <img
            src={profile}
            alt="Profile"
            style={{
              height: 220,
              width: 220,
              borderRadius: 110,
            }}
          />
          <div className="social_group">
            <SocialGroup />
          </div>
        </section>
        <Achievement />
        <section className="experience-container">
          <Experience />
        </section>
        <section className="skill-container">
          <Skills />
        </section>
        <section className="coding-container">
          <Coding />
        </section>
        <section className="project-conatiner">
          <Project
            modalOpenHandler={(idx) => {
              setModalOpen(true);
              setProject(projectData[idx]);
            }}
          />
        </section>
      </div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && (
          <Modal
            handleClose={() => {
              setModalOpen(false);
            }}
            project={project}
          />
        )}
      </AnimatePresence>
    </>
  );
}
