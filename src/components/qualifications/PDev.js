import React from "react";
import PDevCard from "./PDevCard";
import PDevCard2 from "./PDevCard2";

const pdevs = [
  {
    name: "Fullstack Web Development Bootcamp",
    institution: "Uplift Code Camp",
    logo: ["uplift"],
    cert: "#",
    img: "/assets/courses/ucc.jpg",
  },
  {
    name: "Software Product Management Specialization",
    institution: "University of Alberta via Coursera",
    logo: ["alberta", "coursera"],
    cert: "https://coursera.org/share/76cd24a5526e013ece250e9447505173",
    img: "/assets/courses/spms.jpg",
  },
  {
    name: "Agile Development Specialization",
    institution: "University of Virginia via Coursera",
    logo: ["virginia", "coursera"],
    cert: "https://coursera.org/share/dabdb0783d76e1ae91a95156d0794fdc",
    img: "/assets/courses/ads.jpg",
  },
  {
    name: "Object Oriented Programming in Java",
    institution: "Duke University via Coursera",
    logo: ["duke", "coursera"],
    cert: "https://coursera.org/share/f97352acd70bd496eac5b4034b4b9c65",
    img: "/assets/courses/oop.jpg",
  },
  {
    name: "Foundations of UX Design",
    institution: "Google via Coursera",
    logo: ["google", "coursera"],
    cert: "https://coursera.org/share/158345117f05c37f79cdfa1b9bc3bee7",
    img: "/assets/courses/fud.jpg",
  },
];

const PDev = () => {
  return (
    <section
      id="professional-development-section"
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
      <br></br>
    </section>
  );
};

export default PDev;
