import React from "react";
import { Typography } from "@mui/material";

export default function Experience() {
  return (
    <div className="main-card-root-right-pane">
      <h2 className="titles">&lt;Experience/&gt; 🧑🏽‍💻</h2>
      <div className="main-card-root-right-pane-main-text">
        <Typography
          fontSize={20}
          fontFamily={"roboto"}
          sx={{ fontFamily: "'Roboto Mono', monospace" }}
          color={"#13263e"}
        >
          My first and only internship I landed was last summer at The Davey
          Tree Expert Company, as a <b>Software Engineer Intern</b>. This was a
          remote opportunity, during my time there that is from June 2022 -
          September 2022, I had the chance to collaborate with highly skilled
          mentors and contribute code towards the creation of an internal
          SPA(single page application) used for creation of Business Partners.
          We used a JavaScript front-end library called SAPUI5.
        </Typography>

        <Typography
          fontSize={20}
          fontFamily={"roboto"}
          sx={{ fontFamily: "'Roboto Mono', monospace" }}
          color={"#13263e"}
        >
          Some of the things I did there Include
        </Typography>
        <ul>
          <li>
            <Typography
              fontSize={20}
              fontFamily={"roboto"}
              sx={{ fontFamily: "'Roboto Mono', monospace" }}
              color={"#13263e"}
            >
              Developed internal front-end SPA for the creation and maintenance
              of
            </Typography>
          </li>
          <li>
            <Typography
              fontSize={20}
              fontFamily={"roboto"}
              sx={{ fontFamily: "'Roboto Mono', monospace" }}
              color={"#13263e"}
            >
              Business partners using SAPUI5 (Javascript UI framework)
            </Typography>
          </li>
          <li>
            <Typography
              fontSize={20}
              fontFamily={"roboto"}
              sx={{ fontFamily: "'Roboto Mono', monospace" }}
              color={"#13263e"}
            >
              Refactored JS promises to async await and other features to ES6
            </Typography>
          </li>
          <li>
            <Typography
              fontSize={20}
              fontFamily={"roboto"}
              sx={{ fontFamily: "'Roboto Mono', monospace" }}
              color={"#13263e"}
            >
              Improved web application performance by writing concise select
              queries in oData read calls
            </Typography>
          </li>
          <li>
            <Typography
              fontSize={20}
              fontFamily={"roboto"}
              sx={{ fontFamily: "'Roboto Mono', monospace" }}
              color={"#13263e"}
            >
              Developed API to fetch Business partner information and set the
              client side data model, leading to increase in code readability,
              ease of debugging and maintenance.
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  );
}
