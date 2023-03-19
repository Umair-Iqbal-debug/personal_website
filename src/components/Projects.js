import React from "react";
import ProjectsCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <div className="main-card-root-right-pane">
      <h2 className="titles">&lt;Projects/&gt;🧪</h2>

      <div className="project-list">
        {projects.map((project, idx) => {
          return (
            <ProjectsCard
              title={project.title}
              desc={project.desc}
              url={project.url}
              liveDemoUrl={project.liveDemoUrl}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
