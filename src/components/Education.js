import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

export default function Education() {
  return (
    <div className="main-card-root-right-pane">
      <Typography color="white" variant="h3" sx={{ marginBottom: 4 }}>
        &lt;Education/&gt; 🎓
      </Typography>

      <div className="education-timeline-container">
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography color="white" variant="h6" sx={{ marginBottom: 4 }}>
                Stony Brook University CS (2022-2024) NY🗽
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography color="white" variant="h6" sx={{ marginBottom: 4 }}>
                Suffolk Community College CS (2020-2022) NY🗽
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography color="white" variant="h6" sx={{ marginBottom: 4 }}>
                New York Tech CS (1 semester only) NY🗽
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography color="white" variant="h6" sx={{ marginBottom: 4 }}>
                Longwood High School (12th grade only) NY🗽
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography color="white" variant="h6" sx={{ marginBottom: 4 }}>
                Sanjivani International Student(5th - 11th, ICSE Board) IN
                &#127470;
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography color="white" variant="h6" sx={{ marginBottom: 4 }}>
                Abotts Hill Elementary (KG - 4th) ATL🍑
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}
