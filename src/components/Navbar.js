import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Typography, Avatar, Button } from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";
import ConstructionIcon from "@mui/icons-material/Construction";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EmailIcon from "@mui/icons-material/Email";

export default function Navbar({ setPage }) {
  return (
    <div className="main-card-root-left-pane">
      <Avatar
        src="./images/umair_port.jpg"
        alt="Umair Iqbal"
        sx={{ width: 200, height: 200 }}
      />

      <Typography color={"white"} variant="h4">
        Umair Iqbal
      </Typography>

      <Typography
        color={"white"}
        sx={{ fontFamily: "roboto", marginBottom: 3, marginTop: 1 }}
      >
        Web and Mobile Development
      </Typography>

      <div className="nav-link-container">
        <Button
          onClick={() => setPage("EXPERIENCE")}
          sx={{ color: "white" }}
          startIcon={<WorkHistoryIcon />}
        >
          Experience
        </Button>

        <Button
          onClick={() => setPage("HOME")}
          sx={{ color: "white" }}
          startIcon={<HomeOutlined />}
        >
          Home
        </Button>

        <Button
          onClick={() => setPage("EDUCATION")}
          sx={{ color: "white" }}
          startIcon={<SchoolIcon />}
        >
          Education
        </Button>

        <Button
          startIcon={<ConstructionIcon />}
          onClick={() => setPage("PROJECTS")}
          sx={{ color: "white" }}
        >
          Projects
        </Button>

        <Button
          href="/umair_resume.pdf"
          target="_blank"
          sx={{ color: "white" }}
          startIcon={<InsertDriveFileIcon />}
        >
          Resume
        </Button>
      </div>

      <div className="contact-info">
        <a href="mailto:iqbalumairi@gmail.com" target="_blank">
          <EmailIcon fontSize="large" sx={{ color: "white" }} />
        </a>

        <a
          href="https://www.linkedin.com/in/umair-iqbal-4a1535152/"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
        </a>
        <a href="https://github.com/Umair-Iqbal-debug" target="_blank">
          <GitHubIcon fontSize="large" sx={{ color: "white" }} />
        </a>
        <InstagramIcon fontSize="large" sx={{ color: "white" }} />
        <a href="https://leetcode.com/UmairIqbal117/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
