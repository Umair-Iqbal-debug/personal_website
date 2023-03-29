import React from "react";
import { Typography, Button } from "@mui/material";

export default function HelloWorld() {
  return (
    <div className="main-card-root-right-pane">
      <h2 className="titles">&lt;Hello World/&gt; &#x1F44B;!</h2>
      <div className="main-card-root-right-pane-main-text">
        <p className="text">
          Hi, there my name is <b>Umair Iqbal</b>, I am passionate about solving
          problems through Software Development. I am a junior, majoring in
          Computer Science at Stony Brook University, expected to graduate in
          Spring 2024.
        </p>

        <p className="text">
          You can click on the links on the left to explore my projects, resume
          or previous work experiences and to learn more about me. I am always
          eager to collaborate on an interesting project or talk about a project
          I have made before so feel free to contact me via email.
        </p>

        <p className="text">
          I am currently looking for a software development internship
          opportunitiy where I can contribute code towards a greater purpose,
          also gain some skills and meet some mentors.
        </p>

        <p className="text">
          I am passionate about solving problems through software development
          whether that’s creating a full stack web app or a mobile app. Some of
          the technologies I’m proficient with include JavaScript, Python, Java,
          React, HTML,CSS,Express, MongoDB and Node.
        </p>
      </div>
    </div>
  );
}
