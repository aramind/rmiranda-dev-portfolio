import { Box, Button, Grid, Stack, Typography, Zoom } from "@mui/material";
import React from "react";
import { Tilt } from "react-tilt";
import { useInView } from "react-intersection-observer";
import "./qualifications.css";

const PDevCard2 = ({ index, name, institution, img, cert }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <Box
      ref={ref}
      className="pdev__card2"
      sx={{
        width: { xs: "90%", md: "800px" },
      }}
    >
      <Grid
        container
        direction={{ sx: "column", md: "row" }}
        width="100%"
        height="150px"
      >
        <Grid
          item
          xs={12}
          md={4}
          backgroundColor="red"
          height="100%"
          sx={{
            overflow: "hidden",
          }}
        >
          {
            <img
              className="pdev2--img"
              src={img}
              alt="name"
              height="150px"
            />
          }
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
        >
          <Stack>
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
          </Stack>
        </Grid>
      </Grid>
      {/* <div className="pdev__content">
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
          </div> */}
    </Box>
  );
};

export default PDevCard2;
