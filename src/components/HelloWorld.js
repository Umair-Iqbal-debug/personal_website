import React from "react";
import { Typography, Button } from "@mui/material";

export default function HelloWorld() {
  return (
    <div className="main-card-root-right-pane">
      <h2 className="titles">&lt;Hello World/&gt; &#x1F44B;!</h2>
      <div className="main-card-root-right-pane-main-text">
        <p className="text">
          Hi, there my name is <b>Umair Iqbal</b>. I recently graduated with a
          Bachelor of Science in Computer Science, Magna Cum Laude, from Stony Brook University.
        </p>

        <p className="text">
          You can click on the links on the left to explore my projects, resume, 
          or previous work experiences and to learn more about me. I am always 
          eager to collaborate on interesting projects or discuss my past work, 
          so feel free to contact me via email.
        </p>

        <p className="text">
          I am currently seeking a full-time software engineering position where I can contribute 
          my skills and knowledge to impactful projects.
        </p>

        <p className="text">
          I am passionate about solving problems through software development, 
          whether that’s creating a full-stack web app or a mobile app. 
          Some of the technologies I am proficient with include JavaScript, Python, Java, React, HTML, CSS, Express, MongoDB, and Node.js.
        </p>
      </div>
    </div>
  );
}
