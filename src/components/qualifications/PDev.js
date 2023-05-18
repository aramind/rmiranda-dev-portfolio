import React from "react";
import PDevCard from "./PDevCard";

const pdevs = [
  {
    name: "Fullstack Web Development Bootcamp",
    institution: "Uplift Code Camp",
    logo: ["uplift"],
    cert: "#",
  },
  {
    name: "Software Product Management Specialization",
    institution: "University of Alberta via Coursera",
    logo: ["alberta", "coursera"],
    cert: "https://coursera.org/share/76cd24a5526e013ece250e9447505173",
  },
  {
    name: "Agile Development Specialization",
    institution: "University of Virginia via Coursera",
    logo: ["virginia", "coursera"],
    cert: "https://coursera.org/share/dabdb0783d76e1ae91a95156d0794fdc",
  },
  {
    name: "Object Oriented Programming in Java",
    institution: "Duke University via Coursera",
    logo: ["duke", "coursera"],
    cert: "https://coursera.org/share/f97352acd70bd496eac5b4034b4b9c65",
  },
  {
    name: "Foundations of UX Design",
    institution: "Google via Coursera",
    logo: ["google", "coursera"],
    cert: "https://coursera.org/share/158345117f05c37f79cdfa1b9bc3bee7",
  },
];

const PDev = () => {
  return (
    <section
      id="pdev-section"
      className="section pdev"
    >
      <div className="section__title">Professional Development</div>
      <div className="section__content--flex">
        {pdevs.map((pdev, index) => (
          <PDevCard
            key={index}
            index={index}
            {...pdev}
          />
        ))}
      </div>
    </section>
  );
};

export default PDev;
