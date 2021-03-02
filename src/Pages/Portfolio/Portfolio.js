import React, { useState, useEffect } from "react";
import Description from "../../Components/ProjectPieces/Description";
import ProjectCard from "../../Components/ProjectPieces/ProjectCard";
import projects from "./Projects";
import resume from "../../images/DJ-resume.pdf";
import "./Portfolio.css";

function Portfolio() {
  const [projectList, setProjectList] = useState(projects);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const firstThree = projects.slice(0, 3);
    setProjectList(firstThree);
  }, []);

  const handleShowMore = () => {
    const currentProjects = projects.slice(0, projectList.length + 2);
    setProjectList(currentProjects);
    if (currentProjects.length === projects.length) {
      setShowMore(false);
    }
  };

  const styles = {
    resume: {
      marginBottom: "-80px",
    },
    shadow: {
      textShadow: "5px 5px 25px black",
    },
    viewmore: {
      backgroundColor: "gray",
    },
  };
  return (
    <div className="container mb-5">
      <h1
        className="display-4 font-weight-bold text-white text-center"
        style={styles.shadow}
      >
        Projects
      </h1>
      {projectList.map((project, index) =>
        index % 2 === 0 ? (
          <div className="row align-items-center mb-md-n5" key={index}>
            <ProjectCard
              name={project.name}
              deployed={project.deployed}
              image={project.image}
              repo={project.repo}
              card="pl-md-0"
            />
            <Description
              side="pr-md-0"
              description={project.description}
              tech={project.tech}
            />
          </div>
        ) : (
          <div className="row align-items-center mb-md-n5" key={index}>
            <Description
              side="pl-md-0 order-2 order-md-1"
              description={project.description}
              tech={project.tech}
            />
            <ProjectCard
              name={project.name}
              deployed={project.deployed}
              image={project.image}
              repo={project.repo}
              card="pr-md-0 justify-content-end order-1 order-md-2"
            />
          </div>
        )
      )}
      {showMore ? (
        <div className="d-flex justify-content-center">
          <button className="btn viewmore" onClick={handleShowMore}>
            View more projects...
          </button>
        </div>
      ) : null}
      <div className="d-flex justify-content-center mt-5" style={styles.resume}>
        <a href={resume} target="_blank" className="btn btn-lg text-white">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
