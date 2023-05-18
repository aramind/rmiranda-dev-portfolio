import { Button, Typography, Zoom } from "@mui/material";
import React from "react";
import { Tilt } from "react-tilt";
import { useInView } from "react-intersection-observer";

const PDevCard = ({ index, name, institution, logo, cert }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className="pdev__card"
    >
      <Tilt options={{ max: 45, scale: 1, speed: 500 }}>
        <Zoom
          in={inView}
          {...(inView ? { timeout: 1000 } : {})}
          style={{
            transitionDelay: inView ? `${index * 2}00ms` : "0ms",
          }}
        >
          <div className="pdev__content">
            <div className="pdev__details">
              <p className="pdev__title centered">{name}</p>
              <p className="pdev__institution">{institution}</p>
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
        </Zoom>
      </Tilt>
    </section>
  );
};

export default PDevCard;
