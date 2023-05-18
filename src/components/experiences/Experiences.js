import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { Engineering, Code, School } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";

import "./experiences.css";
import { Slide } from "@mui/material";

const Experiences = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensures the animation only triggers once
  });

  return (
    <section
      id="experiences-section"
      className="section experiences"
      ref={ref}
    >
      <div className="section__title">Experiences</div>
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
            <TimelineConnector />
            <TimelineDot color="primary">
              <Engineering />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <Slide
            direction="top"
            in={inView}
            {...(inView ? { timeout: 1000 } : {})}
          >
            <TimelineContent>
              <div className="exp-details">
                <p className="exp-detail exp-date">2013 - 2022</p>
                <p className="exp-detail exp-main">Electronics Engineer</p>
                <p className="exp-detail exp-desc">
                  ECE and ECT review mentor | College Instructor
                </p>
              </div>
            </TimelineContent>
          </Slide>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <School />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <Slide
            direction="top"
            in={inView}
            {...(inView ? { timeout: 1500 } : {})}
          >
            <TimelineContent>
              <div className="exp-details">
                <p className="exp-detail exp-date">2022 - 2023</p>
                <p className="exp-detail exp-main">Uplift Code Camp</p>
                <p className="exp-detail exp-desc">
                  Full-stack web development boot camp
                </p>
              </div>
            </TimelineContent>
          </Slide>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <Code />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <Slide
            direction="top"
            in={inView}
            {...(inView ? { timeout: 2000 } : {})}
          >
            <TimelineContent>
              <div className="exp-details">
                <p className="exp-detail exp-date">2023</p>
                <p className="exp-detail exp-main">Fullstack Web Developer</p>
                <p className="exp-detail exp-desc">
                  Open for project and/or dev job
                </p>
              </div>
            </TimelineContent>
          </Slide>
        </TimelineItem>
      </Timeline>
    </section>
  );
};

export default Experiences;
