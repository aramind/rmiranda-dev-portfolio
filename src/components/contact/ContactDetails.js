import { Stack } from "@mui/material";
import React from "react";
import { FmdGood, Email } from "@mui/icons-material";
import Socials from "./Socials";

const contactDetails = [
  {
    name: "location",
    value: "Manila, Philippines",
    url: "/assets/contact-details/location.png",
    icon: <FmdGood />,
    href: "https://goo.gl/maps/QqHWjfG6R6adi2vF9",
  },
  {
    name: "email",
    value: "r.m.miranda.cs@gmail.com",
    url: "/assets/contact-details/email.png",
    icon: <Email />,
    href: "mailto:r.m.miranda.cs@gmail.com?subject=Inquiry&body=Message",
  },
];

const CdComplete = ({ value, icon, href }) => {
  return (
    <div className="contact-detail contact-detail--comp centered">
      {icon}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <p>{value}</p>
      </a>
    </div>
  );
};

const ContactDetails = () => {
  return (
    <Stack className="contact-details sub-section">
      <p className="section__subtitle">contact & socials</p>
      {contactDetails.map((cd) => (
        <CdComplete
          key={cd?.name}
          value={cd?.value}
          icon={cd?.icon}
          href={cd?.href}
        />
      ))}
      <Socials />
    </Stack>
  );
};

export default ContactDetails;
