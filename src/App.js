import { Typography, Card, Avatar, Button } from "@mui/material";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Tilt Warp", "cursive"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <div className="projects">
          <Typography variant="h1" sx={{ zIndex: 999 }}>
            Hi, there my name is Umair Iqbal
          </Typography>
        </div>
        <div className="intro">
          <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
          </div>
          <Card
            className="main-card"
            elevation={5}
            sx={{
              borderRadius: 10,
              backgroundColor: "rgba(255,255,255,0.13)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="main-card-root">
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

                <Button sx={{ color: "white" }} startIcon={<WorkHistoryIcon />}>
                  Experience
                </Button>
                <Button sx={{ color: "white" }} startIcon={<SchoolIcon />}>
                  Education
                </Button>

                <Button sx={{ color: "white" }} startIcon={<SchoolIcon />}>
                  Resume
                </Button>

                <div className="contact-info">
                  <a href="https://www.linkedin.com/in/umair-iqbal-4a1535152/">
                    <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
                  </a>

                  <a href="https://github.com/Umair-Iqbal-debug">
                    <GitHubIcon fontSize="large" sx={{ color: "white" }} />
                  </a>
                  <InstagramIcon fontSize="large" sx={{ color: "white" }} />
                </div>
              </div>
              <div className="main-card-root-right-pane">
                <Typography color="white" variant="h3" sx={{ marginBottom: 4 }}>
                  &lt;Hello World/&gt; &#x1F44B;&#x2757;
                </Typography>

                <Typography
                  fontSize={20}
                  fontFamily={"roboto"}
                  color={"whitesmoke"}
                >
                  Hi, there my name is Umair Iqbal, I am passionate about
                  solving problems through Software Development. I am a junior,
                  majoring in Computer Science at Stony Brook University,
                  expected to graduate in Spring 2024.
                </Typography>

                <Typography
                  fontSize={20}
                  fontFamily={"roboto"}
                  color={"whitesmoke"}
                >
                  You can click on the links on the left to explore my projects,
                  resume or previous work experiences. I am always eager to
                  collaborate on an interesting project or talk about a project
                  I have made before so feel free to contact me via email.
                </Typography>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
