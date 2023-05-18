import { Button, Typography } from "@mui/material";
import React from "react";
import { Tilt } from "react-tilt";
import { Launch } from "@mui/icons-material";

const logoList = {
  uplift: "/assets/pdev/uplift.png",
  coursera: "/assets/pdev/coursera.png",
  alberta: "/assets/pdev/alberta.png",
  virginia: "/assets/pdev/virginia.png",
  duke: "/assets/pdev/duke.png",
  google: "/assets/pdev/google.png",
};

const PDevCard = ({ name, institution, logo, cert }) => {
  return (
    <Tilt
      className="pdev__card"
      options={{ max: 45, scale: 1, speed: 500 }}
    >
      <div className="pdev__content">
        <div className="pdev__details">
          <p className="pdev__title centered">{name}</p>
          <p className="pdev__institution">{institution}</p>
          {/* <div className="pdev__logos centered">
            {logo.map((item, index) => (
              <div className="pdev__logo centered">
                <img
                  src={logoList[item]}
                  alt={item}
                />
              </div>
            ))}
          </div> */}
          <div className="pdev__action">
            <Button
              variant="outlined"
              sx={{ color: "#ddd", px: "20px" }}
              size="small"
            >
              <Typography
                variant="caption"
                sx={{ fontSize: "0.7rem" }}
              >
                <a
                  href={cert}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                </a>
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default PDevCard;
