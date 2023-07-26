import React, { useState } from "react";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";
//img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import Img4 from "../assets/portfolio-img4.png";
import Img5 from "../assets/portfolio-img5.png";
import Img6 from "../assets/portfolio-img6.png";

const Work = () => {
  const [projectsFilter, setProjectsFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(null); // New state variable

  const projects = [
    {
      title: "ReactJS Portfolio",
      type: "front-end Project",
      image: Img1,
    },
    {
      title: "MEAN Stack Food Store",
      type: "Full-stack Project",
      image: Img2,
    },
    {
      title: "HTML / CSS portfolio",
      type: "front-end Project",
      image: Img3,
    },
    {
      title: "MERN E-commerce App",
      type: "Full-stack Project",
      image: Img4,
    },
    {
      title: "Agency Website",
      type: "front-end Project",
      image: Img5,
    },
    {
      title: "JavaScript Storage App",
      type: "front-end Project",
      image: Img6,
    },
  ];

  const handleFilterChange = (filter) => {
    setProjectsFilter(filter);
    setActiveProject(null); // Reset the active project when the filter changes
  };

  const handleProjectClick = (index) => {
    setActiveProject(index);
  };

  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        {/* Title and Filter Links */}
        <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-0">
          <h2 className="h2 font-bold text-pink-300 mb-8 shadow-box">My Projects</h2>
          <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => handleFilterChange("all")}
              className={`btn btn-sm ${projectsFilter === "all" ? "bg-pink-300" : ""}`}
            >
              All Projects
            </button>
            <button
              onClick={() => handleFilterChange("full-stack")}
              className={`btn btn-sm ${
                projectsFilter === "full-stack" ? "bg-pink-300" : ""
              }`}
            >
              Full Stack Projects
            </button>
            <button
              onClick={() => handleFilterChange("front-end")}
              className={`btn btn-sm ${
                projectsFilter === "front-end" ? "bg-pink-300" : ""
              }`}
            >
              Front-end Projects
            </button>
          </motion.div>
        </motion.div>

        {/* Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const isActive = activeProject === index; // Check if the current project is active
            const showProject =
              projectsFilter === "all" || project.type.toLowerCase().includes(projectsFilter);

            return (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className={`group relative overflow-hidden border-2 border-white/50 rounded-xl ${
                  showProject ? "" : "hidden-project"
                } ${isActive ? "active-project" : ""}`}
                onClick={() => handleProjectClick(index)}
              >
                <div
                  className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"
                ></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">{project.type}</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">{project.title}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;



