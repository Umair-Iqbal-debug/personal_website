import React from "react";
import { Typography } from "@mui/material";
import ProjectsCard from "./ProjectCard";

function Projects() {
  return (
    <div className="main-card-root-right-pane">
      <Typography color="white" variant="h3" sx={{ marginBottom: 4 }}>
        &lt;Projects/&gt;🧪
      </Typography>

      <div className="project-list">
        <ProjectsCard
          title="Playlister"
          desc="It is a full-stack MERN application built as the final project of Software development class. 
          You can do all CRUD operations with playlists of YouTube songs and listen,like and comment on playlists made by others."
          url="https://github.com/Umair-Iqbal-debug/playlister"
        />
        <ProjectsCard
          title="Text Editor"
          desc="A simple text editor made with JavaFX
          with a Markov-Text Generator which is capable of processing huge text files efficiently, 
          of 600k words and over, such as war and peace then it generates text that resembles it."
          url="https://github.com/Umair-Iqbal-debug/Text-Editor---JavaFX#readme"
        />
        <ProjectsCard
          title="Employee Expense Android App"
          desc="It is an expense tracker app, custom tailored to my father’s need as an Elevator Engineer. Users can keep track and edit their expenses along with its category and date. An Expense report can generated in a pdf form which can be shared via email or any form."
          url="https://github.com/Umair-Iqbal-debug/Expense-Tracker-Android-App#readme"
        />
        <ProjectsCard
          title="Base Number Converter"
          desc="A MIPS command line program used to convert to and from different bases."
          url="https://github.com/Umair-Iqbal-debug/Number-Converter-MIPS"
        />
      </div>
    </div>
  );
}

export default Projects;
