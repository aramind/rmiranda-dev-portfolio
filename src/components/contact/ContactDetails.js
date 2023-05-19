import { Link, Stack, Tooltip } from "@mui/material";
import React from "react";
import { FmdGood, Email } from "@mui/icons-material";

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
    href: "mailto:myUniqueEmail@uplift.com?subject=Inquiry&body=Message",
  },
];

const socials = [
  {
    name: "facebook",
    href: "https://www.facebook.com/robinmon.miranda",
  },
  {
    name: "github",
    href: "https://github.com/aramind",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/robin-mon-miranda",
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
      <div className="contact-detail contact-detail--inc centered">
        {socials.map((social) => (
          <Tooltip
            key={social.name}
            title={social.name}
            arrow
            placement="top-end"
          >
            <Link
              href={social.href}
              target="_blank"
            >
              <img
                src={`/assets/socials/${social.name}.png`}
                alt={`${social.name} logo`}
              />
            </Link>
          </Tooltip>
        ))}
      </div>
    </Stack>
  );
};

export default ContactDetails;
