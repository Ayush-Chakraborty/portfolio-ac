import React from "react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import ProjectDescription from "./ProjectDescription";
import cross from "../../Assets/cross.svg";
const Modal = ({ handleClose, project }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(80vw, 600px)",
          padding: "2rem",
          borderRadius: 10,
          backgroundColor: "#03f2aa",
          fontSize: "1.1rem",
        }}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div>
          <img
            src={cross}
            alt=""
            style={{
              float: "right",
              cursor: "pointer",
            }}
            onClick={handleClose}
          />
        </div>
        {project && (
          <ProjectDescription
            desc={project.desc}
            github={project.github}
            heading={project.heading}
            link={project.link}
            techstack={project.techstack}
            img={project.img}
          />
        )}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
