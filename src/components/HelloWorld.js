import React from "react";
import { Typography, Button } from "@mui/material";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

export default function HelloWorld() {
  return (
    <div className="main-card-root-right-pane">
      <h2 className="titles" >
        &lt;Hello World/&gt; &#x1F44B;!
      </h2>
      <div className="main-card-root-right-pane-main-text">
        <Typography  fontFamily={"roboto"} color={"whitesmoke"}>
          Hi, there my name is <b>Umair Iqbal</b>, I am passionate about solving
          problems through Software Development. I am a junior, majoring in
          Computer Science at Stony Brook University, expected to graduate in
          Spring 2024.
        </Typography>

        <Typography fontFamily={"roboto"} color={"whitesmoke"}>
          You can click on the links on the left to explore my projects, resume
          or previous work experiences and to learn more about me. I am always
          eager to collaborate on an interesting project or talk about a project
          I have made before so feel free to contact me via email.
        </Typography>

        <Typography  fontFamily={"roboto"} color={"whitesmoke"}>
          I am currently looking for a Technology internship opportunitiy where
          I can contribute code towards a greater purpose, also gain some skills
          and meet some mentors.
        </Typography>

        <Typography  fontFamily={"roboto"} color={"whitesmoke"}>
          Some of the technologies I am familiar with include Java, JavaScript,
          Python, MERN stack...
        </Typography>
      </div>
    </div>
  );
}
