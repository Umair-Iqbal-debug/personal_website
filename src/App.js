import { Typography, Card, Avatar } from "@mui/material";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Tilt Warp", "cursive"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <div className="intro">
          <Card className="main-card" elevation={5} sx={{ borderRadius: 10 }}>
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

                <SchoolIcon />
                <WorkHistoryIcon />

                <div className="contact-info">
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="projects">
          <Typography variant="h1">Hi, there my name is Umair Iqbal</Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
