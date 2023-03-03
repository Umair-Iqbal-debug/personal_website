import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectsCard({ title, desc, url }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0.13)",
        backdropFilter: "blur(10px)",
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="../public/images/chip_img.jfif"
        title="green iguana"
      />
      <CardContent>
        <Typography color={"white"} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography color={"white"} variant="body2">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={url} sx={{ color: "white" }} startIcon={<GitHubIcon />} />
      </CardActions>
    </Card>
  );
}

export default ProjectsCard;
