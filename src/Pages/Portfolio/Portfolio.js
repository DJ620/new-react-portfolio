import React from "react";
import Description from "../../Components/ProjectPieces/Description";
import ProjectCard from "../../Components/ProjectPieces/ProjectCard";
import projects from "./Projects";
import resume from "../../images/DJ-resume.pdf";

function Portfolio() {
  return (
    <div className="container mb-5">
      {projects.map((project, index) =>
        index % 2 === 0 ? (
          <div className="row align-items-center mb-md-n5">
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
          <div className="row align-items-center mb-md-n5">
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
      <div className="d-flex justify-content-center pb-5">
        <a href={resume} target="_blank" className="btn btn-lg text-white repo">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
