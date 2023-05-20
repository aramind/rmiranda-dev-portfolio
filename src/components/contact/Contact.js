import React from "react";
import ContactForm from "./ContactForm";
import "./contact.css";
import ContactHero from "./ContactHero";
import { Box, Grid, Stack } from "@mui/material";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  return (
    <Box
      id="contact-section"
      className="section contact-section centered"
      sx={{
        paddingX: { sx: "10px", md: "50px" },
        minHeight: { md: `calc(100vh - 110px)` },
      }}
    >
      <div className="contact-content">
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            xs={12}
            md={7}
          >
            <ContactForm />
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
          >
            <Stack gap={2}>
              <ContactHero />
              <ContactDetails />
            </Stack>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Contact;
