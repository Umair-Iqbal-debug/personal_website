import { Typography, Card, Avatar, Button } from "@mui/material";
import "./App.css";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import HelloWorld from "./components/HelloWorld";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { Parallax, ParallaxLayer } from "@react-spring/web";

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

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <div className="landing-page" onClick={() => console.log("clicked!")}>
          <Typography color={"white"} variant="h1" sx={{ zIndex: 999 }}>
            Hi, there my name is Umair Iqbal
          </Typography>
        </div>
        <div className="intro">
          {/* <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
          </div> */}
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
