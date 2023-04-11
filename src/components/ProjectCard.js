import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ProjectsCard({ title, desc, url, liveDemoUrl }) {
  const TITLE_BLUE = "#173d4f";
  const SECONDARY_BLUE = "#13263e";

  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: 239.53,
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0.13)",
        backdropFilter: "blur(10px)",
        position: "relative",
      }}
    >
      <CardContent>
        <Typography
          color={TITLE_BLUE}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography color={SECONDARY_BLUE} variant="body2">
          {desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "absolute", bottom: 0 }}>
        <Button
          href={url}
          sx={{ color: SECONDARY_BLUE, minWidth: "auto", marginLeft: "1em" }}
          startIcon={<GitHubIcon />}
        />

        {liveDemoUrl && (
          <Button
            href={liveDemoUrl}
            sx={{ color: SECONDARY_BLUE, minWidth: "auto" }}
            startIcon={<VisibilityIcon />}
          />
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectsCard;
