import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExpCard = () => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      icon={
        <div>
          <img
            src="./assets/images/logo/logo-blue-bg.png"
            alt="exp"
            width="100px"
            height="100px"
          />
        </div>
      }
    >
      Experience 1
    </VerticalTimelineElement>
  );
};

export default ExpCard;
