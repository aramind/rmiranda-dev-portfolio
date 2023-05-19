import { Link, Tooltip } from "@mui/material";
import React from "react";

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

const Socials = () => {
  return (
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
  );
};

export default Socials;
