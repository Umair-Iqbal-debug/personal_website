import { Card } from "@mui/material";
import "./App.css";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import HelloWorld from "./components/HelloWorld";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Tilt Warp", "cursive"].join(","),
    },
    button: {
      fontSize: "1rem",
    },
  });

  const [pageState, setPage] = useState("HOME");

  let mainContent = <HelloWorld />;
  if (pageState === "PROJECTS") mainContent = <Projects />;
  if (pageState === "EDUCATION") mainContent = <Education />;
  if (pageState === "EXPERIENCE") mainContent = <Experience />;

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <div className="landing-page">
          <h1 className="header">Hi there, my name is Umair Iqbal</h1>
          <h3 className="header-second">Software Engineer</h3>
        </div>
        <div className="intro">
          <Card
            className="main-card"
            elevation={5}
            sx={{
              borderRadius: 5,
              maxWidth: "1200px",
              backgroundColor: "rgba(255,255,255,0.01)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="main-card-root">
              <Navbar setPage={setPage} />
              {mainContent}
            </div>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
