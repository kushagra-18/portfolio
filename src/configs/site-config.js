import React from "react";
import { FaGithub, FaLinkedin, FaQuora } from "react-icons/fa";
const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} K Bhanu Pratap. All Rights Reserved.`,
  author: {
    name: "K Bhanu Pratap",
    accounts: [
      {
        url: "https://github.com/Bpratap946",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />,
      },
      {
        url: "https://www.linkedin.com/in/bhanu-pratap-k/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />,
      },
      {
        url: "https://www.quora.com/profile/Bhanu-Pratap-422",
        label: "Quora Account",
        type: "red",
        icon: <FaQuora />,
      },
    ],
  },
};

export default siteConfig;
